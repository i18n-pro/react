const path = require('path')
const join = path.join
const package = require('./package.json')

const codeNameMap = package.codeNameMap

const readme = {
  entry: 'docs/src/readme',
  out: '',
  name: 'README',
}

const usage = {
  entry: 'docs/src/usage',
  out: 'docs/dist/',
  name: 'USAGE',
}

const api = {
  entry: 'docs/src/api',
  out: 'docs/dist/',
  name: 'API',
}

const changeLog = {
  entry: 'docs/src/changelog',
  out: 'docs/dist/',
  name: 'CHANGELOG',
}

function getSource({ entry, out, name }) {
  const source = Object.entries(codeNameMap).reduce(
    (res, [locale, langName]) => {
      res.push({
        entry: join(__dirname, entry),
        output: join(
          __dirname,
          out,
          `${name}${langName ? `_${langName}` : ''}.md`,
        ),
        params: {
          locale,
        },
      })

      return res
    },
    [],
  )

  return source
}

module.exports = {
  source: [
    ...getSource(readme),
    ...getSource(usage),
    ...getSource(api),
    ...getSource(changeLog),
  ],
}
