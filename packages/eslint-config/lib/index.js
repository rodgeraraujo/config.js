module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    './base.js',
    './node.js',
    './browser.js',
    './modules.js',
    './typescript.js',
    './jest.js',
    './prettier.js',
    './vue.js',
  ],
};
