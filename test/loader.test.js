import compiler from './compiler.js'
const fs = require('fs')
const fse = require('fs-extra')
import path from 'path'
let getVueFileNames = function (dirPath) {
  const allFileNames = fs.readdirSync(dirPath)
  let names = []
  if (allFileNames) {
    for (const oneName of allFileNames) {
      if (path.extname(oneName) === '.vue') {
        names.push(oneName)
      }
    }
  }
  return names
}
let stats = null
beforeAll(async () => {
  fse.emptyDirSync(path.resolve(__dirname, './testMaterial/.vue-markdown-loader-segmentation'))
  fs.rmdirSync(path.resolve(__dirname, './testMaterial/.vue-markdown-loader-segmentation'))
  stats = await compiler('./testMaterial/main.md', { demoContainerComponentName: 'demoContainerComponentName' })
})
describe('输入md文件，转换为vue组件', () => {
  test('vue入口文件转换正常', async () => {
    const outputMain = stats.toJson({source: true}).modules[0].source
    const expectedMain = fs.readFileSync(path.resolve(__dirname, './expected/main.vue'), 'utf8')
    // console.log('expectedMain', expectedMain)
    // console.log('outputMain', outputMain)
    // fs.writeFileSync(path.resolve(__dirname, './expected/main.vue'), outputMain)
    expect(outputMain).toBe(expectedMain)
  })

  test('vue碎片文件夹存在', async () => {
    expect(fs.existsSync(path.resolve(__dirname, './testMaterial/.vue-markdown-loader-segmentation'))).toBe(true)
  })

  test('vue碎片文件数量及名称正常', async () => {
    const expectedFilesNames = getVueFileNames(path.resolve(__dirname, './expected/.vue-markdown-loader-segmentation'))
    const testMaterialFilesNames = getVueFileNames(path.resolve(__dirname, './testMaterial/.vue-markdown-loader-segmentation'))
    expect(expectedFilesNames).toEqual(testMaterialFilesNames)
  })

  test('vue碎片文件内容正常', async () => {
    const expectedFilesNames = getVueFileNames(path.resolve(__dirname, './expected/.vue-markdown-loader-segmentation'))
    let isSame = []
    for (const nameOne of expectedFilesNames) {
      const expectedVueFile = fs.readFileSync(path.resolve(__dirname, './expected/.vue-markdown-loader-segmentation' + path.sep + nameOne), 'utf8')
      const testMaterialVueFile = fs.readFileSync(path.resolve(__dirname, './testMaterial/.vue-markdown-loader-segmentation' + path.sep + nameOne), 'utf8')
      isSame.push(expectedVueFile === testMaterialVueFile)
    }
    expect(isSame).not.toContainEqual(false)
  })
})