const MarkdownIt = require('markdown-it')
const MarkdownItContainer = require('markdown-it-container')
const loaderUtils = require('loader-utils')
const fs = require('fs')
const path = require('path')
module.exports = function (mdFileString) {
  const options = loaderUtils.getOptions(this)
  const codeReg = new RegExp('``` html\n(.|\n)*?\n```', 'g')
  const md = new MarkdownIt({
    html: true,
    breaks: true
  }).use(MarkdownItContainer, 'warning')
  const demoCodes = mdFileString.match(codeReg)
  if (!demoCodes) {
    return `<template>
  <div class="vue-markdown-loader_markdown">
    ${md.render(mdFileString)}
  </div>
</template>`;
  }
  const segmentationPath = path.dirname(this.resourcePath) + path.sep + '.vue-markdown-loader-segmentation'
  const resourceFileName = path.basename(this.resourcePath).replace(path.extname(this.resourcePath), '')
  !fs.existsSync(segmentationPath) && fs.mkdirSync(segmentationPath)
  const fileStrings = []
  const importVues = []
  for (let index = 0; index < demoCodes.length; index++) {
    const vueFileName = resourceFileName + '__' + index
    const componentDebrisName = 'vue_markdown_loader_component_debris_' + index
    const replaceContent = `
      <${options.demoContainerComponentName}>
        <template slot="component">
          <${componentDebrisName} />
        </template>
        <template slot="code">
          <div v-pre>${md.render(demoCodes[index])}</div>
        </template>
      </${options.demoContainerComponentName}>
    `
    const mdFileStringSplitArr = mdFileString.split(demoCodes[index])
    fileStrings.push(`<div class="vue-markdown-loader_markdown">
      ${md.render(mdFileStringSplitArr[0])}
    </div>`)
    fileStrings.push(replaceContent)
    mdFileString = mdFileStringSplitArr[1] ? mdFileStringSplitArr[1] : ''
    const vueFileContent = demoCodes[index].replace(/``` html\n|\n```/g, '')
    const vueFilePathAndName = segmentationPath + path.sep + vueFileName + '.vue'
    fs.writeFileSync(vueFilePathAndName, vueFileContent)
    importVues.push({
      // name: vueFileName
      name: componentDebrisName,
      path: '.' + path.sep + '.vue-markdown-loader-segmentation' + path.sep + vueFileName + '.vue'
    })
  }
  fileStrings.push(`<div class="vue-markdown-loader_markdown">
    ${md.render(mdFileString)}
  </div>`)
  const template = fileStrings.join('')
  let importVuesString = ''
  let components = ''
  for (const importVue of importVues) {
    components += importVue.name + ','
    importVuesString += `\nimport ${importVue.name} from '${importVue.path}';`
  }
  return `<template>
            <div>
              ${template}
            </div>
          </template>
          <script>
          ${importVuesString}
          export default {
            components: {
              ${components}
            }
          }
          </script>`;
}

