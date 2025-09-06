
# Quick Start

> To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br/>
> The  `i18n-pro`  related link in the current document is based on the  `3.0.0`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage<br/>
<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[1. Install](#1-install)<br/>
  &emsp;&emsp;[2. Integrate with API](#2-integrate-with-api)<br/>
  &emsp;&emsp;&emsp;&emsp;[Configure initial state](#configure-initial-state)<br/>
  &emsp;&emsp;&emsp;&emsp;[Integrate  `I18nProvider`  and  `useI18n` , and wrap text with  `t` ](#integrate--i18nprovider--and--usei18n--and-wrap-text-with--t)<br/>
  &emsp;&emsp;[3. Initialize Command Line Configuration File](#3-initialize-command-line-configuration-file)<br/>
  &emsp;&emsp;[4. Adjust  `i18nrc.ts`  Configuration](#4-adjust--i18nrcts--configuration)<br/>
  &emsp;&emsp;[5. Execute Translation Command](#5-execute-translation-command)<br/>
  &emsp;&emsp;[6. Import Language Pack](#6-import-language-pack)<br/>
  &emsp;&emsp;[7. Switch Language](#7-switch-language)<br/>
  &emsp;&emsp;[8. Demo](#8-demo)<br/>

</details>

## 1. Install

```bash
npm i @i18n-pro/react
# or
yarn add @i18n-pro/react
# or
# Note: To prevent issues where the i18n command cannot be used due to ghost dependencies, it is essential to install i18n-pro when using pnpm
pnpm i i18n-pro @i18n-pro/react
```

## 2. Integrate with API

### Configure initial state

```jsx
// i18n.ts
import { I18nState } from '@i18n-pro/react'

export default {
  namespace: 'testNamespace',
} as I18nState
```

### Integrate  `I18nProvider`  and  `useI18n` , and wrap text with  `t` 

```jsx
// App.tsx
import React from 'react'
import { render } from 'react-dom'
import { I18nProvider, useI18n } from '@i18n-pro/react'
import i18nState from './i18n.ts'

function App() {
  const { t } = useI18n()

  return (
    <>
      {/** text-as-key */}
      <div>{t('hello world')}</div>
      {/** custom-key */}
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
```


## 3. Initialize Command Line Configuration File
[Please refer to](https://github.com/i18n-pro/core/blob/v3.0.0/docs/dist/USAGE.md#3-initialize-command-line-configuration-file)

## 4. Adjust  `i18nrc.ts`  Configuration
[Please refer to](https://github.com/i18n-pro/core/blob/v3.0.0/docs/dist/USAGE.md#4-adjust--i18nrcts--configuration)

## 5. Execute Translation Command
[Please refer to](https://github.com/i18n-pro/core/blob/v3.0.0/docs/dist/USAGE.md#5-execute-translation-command)

## 6. Import Language Pack
The language pack already exists, so it needs to be applied to the project

> Currently,  `3`  methods are supported for importing language pack. This documentation only covers the  `Static import`  method. For more methods, [Please refer to](https://github.com/i18n-pro/core/blob/v3.0.0/docs/dist/USAGE.md#6-import-language-pack)<br/>

If the generated language pack is a separate file form （`output.langType == 'multiple'`） for each language, the operation is as follows:
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
If the generated language pack is in the form of aggregation （`output.langType == 'single'`）, the operation is as follows:
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
At this point, the internationalization function has been integrated. Simply set  `locale`  as the target language to display the corresponding translated content on the page. If there is a new  `text`  (requires a  `t`  function wrap), just re-execute the  `npx i18n t`  command to generate the latest language pack to ensure that all new content is translated.

## 7. Switch Language
You can switch languages through  `setI18n` 
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
      <option value="ja">日本語</option>
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

  return (
    <>
      {/** text-as-key */}
      <div>{t('hello world')}</div>
      {/** custom-key */}
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
```


## 8. Demo
Real code examples can refer to  [Live Demo](https://github.com/i18n-pro/react/tree/v2.0.0#live-demo)  in the  `README`  document