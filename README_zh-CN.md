<div align="center">
  <p style="font-size: 18px;">适用于 React 的轻量、简单、灵活、自动翻译的国际化工具</p>

[English](https://github.com/i18n-pro/react-i18n-pro/tree/v0.1.0-alpha.1#readme) | 简体中文



[![npm-version](https://img.shields.io/npm/v/@i18n-pro/react.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/@i18n-pro/react "npm")
[![npm-download](https://img.shields.io/npm/dm/@i18n-pro/react "npm-download")](https://www.npmjs.com/package/@i18n-pro/react "npm")

[![github-stars](https://img.shields.io/github/stars/i18n-pro/react-i18n-pro?style=social "github-stars")](https://github.com/i18n-pro/react-i18n-pro/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/i18n-pro/react-i18n-pro/dev "last-commit")](https://github.com/i18n-pro/react-i18n-pro/commits/dev "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/i18n-pro/react-i18n-pro "github-issues")](https://github.com/i18n-pro/react-i18n-pro/issues "github-issues")
[![codecov](https://codecov.io/gh/i18n-pro/react-i18n-pro/branch/main/graph/badge.svg?token=758C46SIE7 "codecov")](https://codecov.io/gh/eyelly-wu/react-i18n-pro "codecov")

</div>
<details >
  <summary>目录</summary>

  [愿景](#愿景)<br/>
  [特性](#特性)<br/>
  [Live Demo](#live-demo)<br/>
  [原理](#原理)<br/>
  [帮助文档](#帮助文档)<br/>
  [License](#license)<br/>

</details>


# 愿景
为了让接入国际化成为轻松且愉快的事😄💪🏻
# 特性

* **轻量**：[![bundlesize](https://img.shields.io/bundlephobia/minzip/i18n-pro?color=brightgreen&style=plastic "i18n-pro-bundlesize")](https://bundlephobia.com/package/i18n-pro "i18n-pro-bundlesize") + [![bundlesize](https://img.shields.io/bundlephobia/minzip/@i18n-pro/react?color=brightgreen&style=plastic "bundlesize")](https://bundlephobia.com/package/@i18n-pro/react "bundlesize")
* 如下特性继承于 [i18n-pro](https://github.com/eyelly-wu/i18n-pro "i18n-pro") 
   * **简单**
   * **灵活**
   * **自动翻译**
   * **keyless**


# Live Demo

* [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/react-i18n-pro-demo/main?file=README_zh-CN.md)
* [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/edit/react-i18n-pro-demo?file=README_zh-CN.md)


# 原理
该库是基于 [i18n-pro](https://github.com/eyelly-wu/i18n-pro "i18n-pro") 结合 `React` 的 `context` 特性来实现的

主要由 3 部分构成
* Provider
* useI18n
* i18nContext



**Provider**：配置国际化初始化属性的容器组件

**useI18n**：获取国际化 API 和状态的 hook 方法

**i18nContext**：作为上下传递属性，也是在 `React` 中实现国际化的关键， `useI18n` 也是基于此实现

简易示例如下
```typescript react
import { render } from 'react-dom'
import { Provider, useI18n } from '@i18n-pro/react'

function App(){
  const { t } = useI18n()

  return (
    <>
      {t('hello world')}
    </>
  )
}

render(
  <Provider
    namespace="i18n-example"
    locale="en"
    langs={{
      zh: {
        'hello world': '你好世界'
      }
    }}
  >
    <App />
  </Provider>
), document.getElementById('root'))
```

# 帮助文档

* 待更新


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu