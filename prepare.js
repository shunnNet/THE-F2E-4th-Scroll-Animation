// prepare.js
// prepare will run right after npm install

const isCi = process.env.CI !== undefined
if (!isCi) {
  console.log('install husky hook')
  console.log('this will configure git config core.hooksPath to .husky')
  require('husky').install()
}
