const path = require('path')

module.exports = {
  funcName: 't',
  entry: path.join(__dirname, '../src'),
  fileRegExp: /\.[jt]sx?$/,
  output: {
    path: path.join(__dirname, './i18n/'),
  },
  translator: 'baidu',
  baiduConfig: {
    appid: '20220530001234107',
    key: '4DsAkNxFeKPg5wMLrrVG',
    from: 'zh',
    to: ['en'],
    delay: 1,
  },
}
