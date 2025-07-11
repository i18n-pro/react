<div align="center">
  <p style="font-size: 18px;">开箱即用的轻量级 React 国际化自动翻译解决方案</p>

[English](https://github.com/i18n-pro/react/tree/v2.0.0-alpha.2#readme) | 简体中文



[![npm-version](https://img.shields.io/npm/v/@i18n-pro/react.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/@i18n-pro/react "npm")
[![npm-download](https://img.shields.io/npm/dm/@i18n-pro/react "npm-download")](https://www.npmjs.com/package/@i18n-pro/react "npm")

[![github-stars](https://img.shields.io/github/stars/i18n-pro/react?style=social "github-stars")](https://github.com/i18n-pro/react/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/i18n-pro/react/main "last-commit")](https://github.com/i18n-pro/react/commits/main "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/i18n-pro/react "github-issues")](https://github.com/i18n-pro/react/issues "github-issues")
[![codecov](https://codecov.io/gh/i18n-pro/react/branch/main/graph/badge.svg?token=GQ6S1GPFCM "codecov")](https://codecov.io/gh/i18n-pro/react "codecov")

![demo](https://s3.bmp.ovh/imgs/2025/07/11/b5b5369b6e08f1f1.gif)

</div>
<details >
  <summary>目录</summary>

  [愿景](#愿景)<br/>
  [要求](#要求)<br/>
  [特性](#特性)<br/>
  [Live Demo](#live-demo)<br/>
  [原理](#原理)<br/>
  [License](#license)<br/>

</details>


# 愿景
为了让接入国际化成为轻松且愉快的事😄💪🏻
# 要求

* react >= **16.8.0**
* react-dom >= **16.8.0**
* react-native >= **0.59.0**
* i18n-pro >= **3.0.0** < **4.0.0**


# 特性

* **轻量**：[![bundlesize](https://img.shields.io/bundlephobia/minzip/i18n-pro?color=brightgreen&style=plastic "i18n-pro-bundlesize")](https://bundlephobia.com/package/i18n-pro "i18n-pro-bundlesize") + [![bundlesize](https://img.shields.io/bundlephobia/minzip/@i18n-pro/react?color=brightgreen&style=plastic "bundlesize")](https://bundlephobia.com/package/@i18n-pro/react "bundlesize")
* 以下特性继承于 [i18n-pro](https://github.com/i18n-pro/core "i18n-pro") 
   * **简单**
   * **灵活**
   * **自动翻译**
   * **keyless**


# Live Demo

* [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/react-demo/v2?file=README_zh-CN.md)
* [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/react-demo/tree/v2?file=README_zh-CN.md)


# 原理
该库是基于 [i18n-pro](https://github.com/i18n-pro/core "i18n-pro") 结合 `React` 的 `context` 特性来实现的

主要由 `2` 部分构成
* I18nProvider
* useI18n



**I18nProvider**：配置国际化初始化属性的容器组件

**useI18n**：获取国际化 API 和状态的 hook 方法



简易示例如下
```typescript react
import React from 'react'
import { render } from 'react-dom'
import { I18nProvider, useI18n } from '@i18n-pro/react'

function App() {
  const { t } = useI18n()

  return <>{t('hello world')}</>
}

render(
  <I18nProvider
    namespace="i18n-example"
    locale="en"
    langs={{
      zh: {
        'hello world': '你好世界',
      },
      ja:{
        "hello world": "こんにちは世界",
      },
    }}
  >
    <App />
  </I18nProvider>,
  document.getElementById('root'),
)
```

# 帮助文档

>为了避免不必要的重复文档内容，该库的部分文档是链接 `i18n-pro` 中的内容<br />当前文档中 `i18n-pro` 相关链接是基于 `3.0.0-alpha.1` 版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致
* 当前库
   * [快速上手](https://github.com/i18n-pro/react/blob/v2.0.0-alpha.2/docs/dist/USAGE_zh-CN.md)
   * [API](https://github.com/i18n-pro/react/blob/v2.0.0-alpha.2/docs/dist/API_zh-CN.md)
   * [更新日志](https://github.com/i18n-pro/react/blob/v2.0.0-alpha.2/docs/dist/CHANGELOG_zh-CN.md)
* i18n-pro
   * [命令行](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.1/docs/dist/COMMAND_LINE_zh-CN.md)
   * [匹配规则](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.1/docs/dist/MATCH_RULE_zh-CN.md)
   * [Q&A](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.1/docs/dist/Q&A_zh-CN.md)
   * [翻译日志](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.1/docs/dist/OUTPUT_LOG_zh-CN.md)


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu