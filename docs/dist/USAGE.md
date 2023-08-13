
# Quick Start

>为了避免不必要的重复文档内容，该库的部分文档是链接 `i18n-pro` 中的内容<br />当前文档中 `i18n-pro` 相关链接是基于 `2.0.0` 版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致
<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[1. 安装](#1-安装)<br/>
  &emsp;&emsp;[2. 接入API](#2-接入api)<br/>
  &emsp;&emsp;&emsp;&emsp;[配置初始状态](#配置初始状态)<br/>
  &emsp;&emsp;&emsp;&emsp;[接入 `I18nProvider` 和 `useI18n` ，并用 `t` 包裹 `Translation Text` ](#接入-i18nprovider-和-usei18n-，并用-t-包裹-translation-text)<br/>
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
pnpm i @i18n-pro/react
```

## 2. 接入API

### 配置初始状态

```js
// i18n.ts
import { I18nState } from 'i18n-pro/react'

export default {
  namespace: 'testNamespace',
} as I18nState
```

### 接入 `I18nProvider` 和 `useI18n` ，并用 `t` 包裹 `Translation Text` 

```js
// App.tsx
import React from 'react'
import { render } from 'react-dom'
import { useI18n } from '@i18n-pro/react'
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
在命令行终端输入如下命令，[更多命令](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/COMMAND_LINE.md#命令列表)
```bash
npx i18n init 
```
命令执行成功后会在当前目录下生成一个 `i18nrc.js` 的文件，默认配置如下：
>当前模板是基于 [i18n-pro@2.0.0](https://github.com/i18n-pro/core/tree/v2.0.0 "i18n-pro@2.0.0") 生成
```js
const { join } = require('path')

module.exports = {
  funcName: 't',
  entry: join(__dirname, './src/'),
  fileRegExp: /\.[jt]s$/,
  output: {
    path: join(__dirname, './i18n/'),
  },
  translator: 'googlex',
  googlexConfig: {
    from: 'en',
    to: ['zh-CN', 'ja'],
    codeLocaleMap: {
      'zh-CN': 'zh',
    },
    // proxy: 'http://127.0.0.1:1087',
  },
}
```


## 4. 调整 `i18nrc.js` 配置
根据需求自行调整配置文件中的配置项，配置项的[说明](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/COMMAND_LINE.md#1--i18nrcjs-配置)

## 5. 执行翻译命令

```bash
npx i18n t 
```
命令执行成功的话，会在指定的目录下生成语言包文件<br /><br />默认配置下，生成的语言包是每个语言单独文件形式（`output.langType == 'multiple'`），会生成 `2` 个语言包： `zh.json` 和 `ja.json` 
```text
// zh.json
{
  "hello world": "你好世界"
}

// ja.json
{
  "hello world": "こんにちは世界"
}
```
如果生成的语言包是聚合的形式（`output.langType == 'single'`），会生成 `1` 个语言包： `langs.json` 
```text
// langs.json
{
  "zh": {
    "hello world": "你好世界"
  },
  "ja": {
    "hello world": "こんにちは世界"
  }
}
```


## 6. 引入语言包
语言包已经有了，就需要应用到项目中了

如果生成的语言包是每个语言单独文件形式（`output.langType == 'multiple'`），操作如下：
```diff
// i18n.ts
import { I18nState } from 'i18n-pro/react'
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
import { I18nState } from 'i18n-pro/react'
+ import langs from './i18n/langs.json'

export default {
  namespace: 'testNamespace',
+  locale: 'zh',
+  langs,
} as I18nState
```
至此，项目已经完全接入了国际化，上面 `locale` 指定为目标语言中任意一个，在页面上就能看到翻译好的内容了。后续如果项目中有新增的 `Translation Text` （需要用 `t` 函数包裹哟），就仅仅需要再次执行翻译命令 `npx i18n t` 生成最新的语言包就可以了

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
import { useI18n } from '@i18n-pro/react'
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
真实代码示例可参考 `README` 文档中的 [Live Demo](https://github.com/i18n-pro/react/tree/vdoc#live-demo) 