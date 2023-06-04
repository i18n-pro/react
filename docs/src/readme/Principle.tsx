import { Break, H1, Bold, CodeBlock, List } from 'jsx-to-md'
import { getI18nPro } from '../utils'

export default function Principle() {
  return (
    <>
      <H1>{t('原理')}</H1>
      {t(
        '该库是基于{0}结合{1}的{2}特性来实现的',
        getI18nPro('link'),
        ' `React` ',
        ' `context` ',
      )}
      <Break />
      <Break />
      {t('主要由{0}部分构成', ' `2` ')}
      <List items={['U', 'Provider', 'useI18n']} />
      <Break />
      <Break />
      <Bold>Provider</Bold>：{t('配置国际化初始化属性的容器组件')}
      <Break />
      <Break />
      <Bold>useI18n</Bold>：{t('获取国际化 API 和状态的 hook 方法')}
      <Break />
      <Break />
      <Break />
      <Break />
      {t('简易示例如下')}
      <CodeBlock
        langType="typescript react"
        code={`
import React from 'react'
import { render } from 'react-dom'
import { Provider, useI18n } from '@i18n-pro/react'

function App() {
  const { t } = useI18n()

  return <>{t('hello world')}</>
}

render(
  <Provider
    namespace="i18n-example"
    locale="en"
    langs={{
      zh: {
        'hello world': '你好世界',
      },
    }}
  >
    <App />
  </Provider>,
  document.getElementById('root'),
)
`}
      />
    </>
  )
}
