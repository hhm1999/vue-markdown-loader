pipeline {
  agent any
  stages {
    stage('test') {
      agent {
        docker {
          image 'node:14.8.0-alpine3.12'
        }

      }
      steps {
        sh '''npm config set registry http://registry.npm.taobao.org/
npm ci
npm run test'''
      }
    }

    stage('npm publish') {
      agent {
        docker {
          image 'node:14.8.0-alpine3.12'
        }

      }
      steps {
        sh '''versionOnline=$(npm view @hhm1999/vue-markdown-loader version)
versionLocal=`node -p "require(\'./package.json\').version"`
if [ "$versionOnline" != "$versionLocal" ]; then
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install -g npm-cli-login
NPM_USER=${NPM_USER} NPM_PASS=${NPM_PASS} NPM_EMAIL=${NPM_EMAIL} npm-cli-login
npm publish --access public
fi'''
      }
    }

  }
}