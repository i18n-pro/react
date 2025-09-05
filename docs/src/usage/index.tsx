import React, {
  Break,
  H1,
  H2,
  CodeBlock,
  H3,
  Link,
  render,
  TableOfContents,
  BlockQuote,
} from 'jsx-to-md'
import I18nProWrapper from '../components/I18nProWrapper'
import { Package } from '../types'
import {
  getDocHref,
  initI18n,
  getTranslationText,
  packageName,
  getI18nProDocHref,
  getText,
} from '../utils'
import SpecialStatement from '../components/SpecialStatement'

type I18nProProps = {
  i18nProPkg: Package
}

const showPackageName = `@${packageName}`

function Install() {
  return (
    <>
      <H2>{`1. ${t('安装')}`}</H2>
      <CodeBlock
        langType="bash"
        code={`npm i ${showPackageName}
# ${t('或者')}
yarn add ${showPackageName}
# ${t('或者')}
# ${t(
          '注意：为了避免幽灵依赖导致 i18n 命令不能使用的问题，使用 pnpm 必须要安装 i18n-pro',
        )}
pnpm i i18n-pro ${showPackageName}`}
      />
    </>
  )
}

function LinkApi() {
  return (
    <>
      <H2>{`2. ${t('接入 API')}`}</H2>
      <H3>{t('配置初始状态')}</H3>
      <CodeBlock
        langType="jsx"
        code={`
// i18n.ts
import { I18nState } from '${showPackageName}'

export default {
  namespace: 'testNamespace',
} as I18nState
`}
      />
      <H3>
        {t(
          '接入{0}和{1}，并用{2}包裹{3}',
          ' `I18nProvider` ',
          ' `useI18n` ',
          ' `t` ',
          getTranslationText(true),
        )}
      </H3>
      <CodeBlock
        langType="jsx"
        code={`
// App.tsx
import React from 'react'
import { render } from 'react-dom'
import { I18nProvider, useI18n } from '${showPackageName}'
import i18nState from './i18n.ts'

function App() {
  const { t } = useI18n()

  return (
    <>
      {/** ${t('文案即 key')} */}
      <div>{t('hello world')}</div>
      {/** ${t('自定义 key')} */}
      <div>{t.t('custom-key', 'hello world')}</div>
    </>
  )
}

render(
  <I18nProvider {...i18nState}>
    <App />
  </I18nProvider>,
  document.getElementById('root'),
)
`}
      />
    </>
  )
}

function InitConfig(props: I18nProProps) {
  const { i18nProPkg } = props

  const title = `3. ${t('初始化命令行配置文件')}`

  return (
    <>
      <Break />
      <H2>{title}</H2>
      <Link href={getI18nProDocHref(i18nProPkg, 'USAGE', title)}>
        {t('请参考')}
      </Link>
    </>
  )
}

function ModifyConfig(props: I18nProProps) {
  const { i18nProPkg } = props

  const configName = ' `i18nrc.ts` '
  const title = `4. ${t('调整{0}配置', configName)}`

  return (
    <>
      <Break />
      <H2>{title}</H2>
      <Link href={getI18nProDocHref(i18nProPkg, 'USAGE', title)}>
        {t('请参考')}
      </Link>
    </>
  )
}

function ExecuteTranslateCommand(props: I18nProProps) {
  const title = `5. ${t('执行翻译命令')}`

  return (
    <>
      <Break />
      <H2>{title}</H2>
      <Link href={getI18nProDocHref(props.i18nProPkg, 'USAGE', title)}>
        {t('请参考')}
      </Link>
    </>
  )
}

function ImportLangs(props: I18nProProps) {
  const title = `6. ${t('引入语言包')}`

  return (
    <>
      <Break />
      <H2>{title}</H2>
      {t('语言包已经有了，就需要应用到项目中了')}
      <Break />
      <BlockQuote>{`${t(
        '当前支持{0}种引入语言包的方式，本文档只介绍{1}的方式，更多方式{2}',
        getText('3'),
        getText(t('静态导入')),
        render(
          <Link href={getI18nProDocHref(props.i18nProPkg, 'USAGE', title)}>
            {t('请参考')}
          </Link>,
        ),
      )}`}</BlockQuote>
      <Break lines={2} />
      {t(
        '如果生成的语言包是每个语言单独文件形式{0}，操作如下：',
        "（`output.langType == 'multiple'`）",
      )}
      <CodeBlock
        langType="diff"
        code={`
// i18n.ts
import { I18nState } from '${showPackageName}'
+ import zh from './i18n/zh.json'
+ import ja from './i18n/ja.json'

export default {
  namespace: 'testNamespace',
+  locale: 'zh',
+  langs: {
+    zh,
+    ja,
+  },
} as I18nState
`}
      />
      {t(
        '如果生成的语言包是聚合的形式{0}，操作如下：',
        "（`output.langType == 'single'`）",
      )}
      <CodeBlock
        langType="diff"
        code={`
// i18n.ts
import { I18nState } from '${showPackageName}'
+ import langs from './i18n/langs.json'

export default {
  namespace: 'testNamespace',
+  locale: 'zh',
+  langs,
} as I18nState
`}
      />
      {t(
        '至此，国际化功能已集成完毕。只需将 {0} 设置为目标语言，即可在页面上展示对应的翻译内容。后续如有新增{1}（需用 {2} 函数包裹），只需重新执行 {3} 命令生成最新语言包，即可确保所有新增内容均被翻译',
        getText('locale'),
        getTranslationText(),
        getText('t'),
        getText('npx i18n t'),
      )}
    </>
  )
}

function SwitchLang() {
  return (
    <>
      <Break />
      <H2>{`7. ${t('切换语言')}`}</H2>
      {t('可以通过{0}来切换语言', ' `setI18n` ')}
      <CodeBlock
        langType="diff"
        code={`
// SwitchLang.tsx
import React from 'react'
import { useI18n } from '${showPackageName}'

export default function SwitchLang() {
  const { setI18n, i18nState } = useI18n()

  function onSelectChange(e) {
    const locale = e.target.value
    setI18n({
      locale,
    })
  }

  return (
    <select
      defaultValue="en"
      value={i18nState.locale}
      onChange={onSelectChange}
    >
      <option value="zh">简体中文</option>
      <option value="en">English</option>
      <option value="ja">日本語</option>
    </select>
  )
}


// App.tsx
import React from 'react'
import { render } from 'react-dom'
import { I18nProvider, useI18n } from '${showPackageName}'
import i18nState from './i18n.ts'
+ import SwitchLang from './SwitchLang'

function App() {
  const { t } = useI18n()

  return (
    <>
      {/** ${t('文案即 key')} */}
      <div>{t('hello world')}</div>
      {/** ${t('自定义 key')} */}
      <div>{t.t('custom-key', 'hello world')}</div>
+     <SwitchLang />
    </>
  )
}

render(
  <I18nProvider {...i18nState}>
    <App />
  </I18nProvider>,
  document.getElementById('root'),
)
`}
      />
    </>
  )
}

function Demo() {
  return (
    <>
      <Break />
      <H2>8. Demo</H2>
      {t(
        '真实代码示例可参考{0}文档中的{1}',
        ' `README` ',
        ` ${render(
          <Link href={getDocHref('README', 'Live Demo')}>Live Demo</Link>,
        )} `,
      )}
    </>
  )
}

export default function Usage(props) {
  initI18n(props)

  return (
    <>
      <I18nProWrapper>
        {(i18nProPkg) => (
          <>
            <H1 skip>{t('快速上手')}</H1>
            <SpecialStatement i18nProPkg={i18nProPkg} />
            <TableOfContents text={t('目录')} open={false} />
            <Install />
            <LinkApi />
            <InitConfig i18nProPkg={i18nProPkg} />
            <ModifyConfig i18nProPkg={i18nProPkg} />
            <ExecuteTranslateCommand i18nProPkg={i18nProPkg} />
            <ImportLangs i18nProPkg={i18nProPkg} />
            <SwitchLang />
            <Demo />
          </>
        )}
      </I18nProWrapper>
    </>
  )
}
