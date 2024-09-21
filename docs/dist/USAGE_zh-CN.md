
# 快速上手

>为了避免不必要的重复文档内容，该库的部分文档是链接 `i18n-pro` 中的内容<br />当前文档中 `i18n-pro` 相关链接是基于 `2.1.1` 版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致
<details >
  <summary>目录</summary>

  &emsp;&emsp;[1. 安装](#1-安装)<br/>
  &emsp;&emsp;[2. 接入API](#2-接入api)<br/>
  &emsp;&emsp;&emsp;&emsp;[配置初始状态](#配置初始状态)<br/>
  &emsp;&emsp;&emsp;&emsp;[接入 `I18nProvider` 和 `useI18n` ，并用 `t` 包裹 `翻译文案` ](#接入-i18nprovider-和-usei18n-并用-t-包裹-翻译文案)<br/>
  &emsp;&emsp;[3. 初始化命令行配置文件](#3-初始化命令行配置文件)<br/>
  &emsp;&emsp;[4. 调整 `i18nrc.js` 配置](#4-调整-i18nrcjs-配置)<br/>
  &emsp;&emsp;[5. 执行翻译命令](#5-执行翻译命令)<br/>
  &emsp;&emsp;[6. 引入语言包](#6-引入语言包)<br/>
  &emsp;&emsp;[7. 切换语言](#7-切换语言)<br/>
  &emsp;&emsp;[8. Demo](#8-demo)<br/>

</details>

## 1. 安装

```bash
npm i @i18n-pro/react
# 或者
yarn add @i18n-pro/react
# 或者
# 注意：为了避免幽灵依赖导致 i18n 命令不能使用的问题，使用 pnpm 必须要安装 i18n-pro
pnpm i i18n-pro @i18n-pro/react
```

## 2. 接入API

### 配置初始状态

```js
// i18n.ts
import { I18nState } from '@i18n-pro/react'

export default {
  namespace: 'testNamespace',
} as I18nState
```

### 接入 `I18nProvider` 和 `useI18n` ，并用 `t` 包裹 `翻译文案` 

```js
// App.tsx
import React from 'react'
import { render } from 'react-dom'
import { I18nProvider, useI18n } from '@i18n-pro/react'
import i18nState from './i18n.ts'

function App() {
  const { t } = useI18n()

  return <>{t('hello world')}</>
}

render(
  <I18nProvider {...i18nState}>
    <App />
  </I18nProvider>,
  document.getElementById('root'),
)
```


## 3. 初始化命令行配置文件
[请参考](https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/USAGE_zh-CN.md#3-初始化命令行配置文件)

## 4. 调整 `i18nrc.js` 配置
[请参考](https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/USAGE_zh-CN.md#4-调整-i18nrcjs-配置)

## 5. 执行翻译命令
[请参考](https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/USAGE_zh-CN.md#5-执行翻译命令)

## 6. 引入语言包
语言包已经有了，就需要应用到项目中了

如果生成的语言包是每个语言单独文件形式（`output.langType == 'multiple'`），操作如下：
```diff
// i18n.ts
import { I18nState } from '@i18n-pro/react'
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
```
如果生成的语言包是聚合的形式（`output.langType == 'single'`），操作如下：
```diff
// i18n.ts
import { I18nState } from '@i18n-pro/react'
+ import langs from './i18n/langs.json'

export default {
  namespace: 'testNamespace',
+  locale: 'zh',
+  langs,
} as I18nState
```
至此，项目已经完全接入了国际化，上面 `locale` 指定为目标语言中任意一个，在页面上就能看到翻译好的内容了。后续如果项目中有新增的 `翻译文案` （需要用 `t` 函数包裹哟），就仅仅需要再次执行翻译命令 `npx i18n t` 生成最新的语言包就可以了

## 7. 切换语言
可以通过 `setI18n` 来切换语言
```diff
// SwitchLang.tsx
import React from 'react'
import { useI18n } from '@i18n-pro/react'

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
      <option value="jp">日本語</option>
    </select>
  )
}


// App.tsx
import React from 'react'
import { render } from 'react-dom'
import { I18nProvider, useI18n } from '@i18n-pro/react'
import i18nState from './i18n.ts'
+ import SwitchLang from './SwitchLang'

function App() {
  const { t } = useI18n()

-  return <>{t('hello world')}</>
+  return (
+  <>
+    {t('hello world')}
+    <SwitchLang />
+  </>
+)
}

render(
  <I18nProvider {...i18nState}>
    <App />
  </I18nProvider>,
  document.getElementById('root'),
)
```


## 8. Demo
真实代码示例可参考 `README` 文档中的 [Live Demo](https://github.com/i18n-pro/react/blob/v1.0.1/README_zh-CN.md#live-demo) 