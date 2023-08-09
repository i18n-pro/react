<div align="center">
  <p style="font-size: 18px;">Lightweight, simple, flexible, automatic translation internationalization tool for React</p>

English | [简体中文](https://github.com/i18n-pro/react/blob/vdoc/README_zh-CN.md)



[![npm-version](https://img.shields.io/npm/v/@i18n-pro/react.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/@i18n-pro/react "npm")
[![npm-download](https://img.shields.io/npm/dm/@i18n-pro/react "npm-download")](https://www.npmjs.com/package/@i18n-pro/react "npm")

[![github-stars](https://img.shields.io/github/stars/i18n-pro/react?style=social "github-stars")](https://github.com/i18n-pro/react/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/i18n-pro/react/main "last-commit")](https://github.com/i18n-pro/react/commits/main "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/i18n-pro/react "github-issues")](https://github.com/i18n-pro/react/issues "github-issues")
[![codecov](https://codecov.io/gh/i18n-pro/react/branch/main/graph/badge.svg?token=GQ6S1GPFCM "codecov")](https://codecov.io/gh/i18n-pro/react "codecov")

</div>
<details >
  <summary>Table of Contents</summary>

  [Vision](#vision)<br/>
  [要求](#要求)<br/>
  [Features](#features)<br/>
  [Live Demo](#live-demo)<br/>
  [Principle](#principle)<br/>
  [License](#license)<br/>

</details>


# Vision
To make internationalization easy and enjoyable 😄💪🏻
# 要求

* react >= **16.8.0**
* react-dom >= **16.8.0**
* react-native >= **0.59.0**
* i18n-pro >= **2.0.0**


# Features

* **lightweight**：[![bundlesize](https://img.shields.io/bundlephobia/minzip/i18n-pro?color=brightgreen&style=plastic "i18n-pro-bundlesize")](https://bundlephobia.com/package/i18n-pro "i18n-pro-bundlesize") + [![bundlesize](https://img.shields.io/bundlephobia/minzip/@i18n-pro/react?color=brightgreen&style=plastic "bundlesize")](https://bundlephobia.com/package/@i18n-pro/react "bundlesize")
* The following features are inherited from  [i18n-pro](https://github.com/i18n-pro/core "i18n-pro") 
   * **simple**
   * **flexible**
   * **automatic-translation**
   * **keyless**


# Live Demo

* [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/react-demo/main?file=README.md)
* [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/react-demo?file=README.md)


# Principle
This library is implemented based on  [i18n-pro](https://github.com/i18n-pro/core "i18n-pro")  combined with  `React` 's  `context`  feature

Mainly composed of  `2`  parts
* I18nProvider
* useI18n



**I18nProvider**：Configure container components for internationalization initialization properties

**useI18n**：Hook method for obtaining internationalization API and status



A simple example is as follows
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

# Help Document

>为了避免不必要的重复文档内容，该库的部分文档是链接 `i18n-pro` 中的内容<br />当前文档中 `i18n-pro` 相关链接是基于 `2.0.0` 版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致
* 当前库
   * [Quick Start](https://github.com/i18n-pro/react/blob/vdoc/docs/dist/USAGE.md)
   * [API](https://github.com/i18n-pro/react/blob/vdoc/docs/dist/API.md)
   * [Changelog](https://github.com/i18n-pro/react/blob/vdoc/docs/dist/CHANGELOG.md)
* i18n-pro
   * [Command Line](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/COMMAND_LINE.md)
   * [Matching Rules](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/MATCH_RULE.md)
   * [Q&A](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/Q&A.md)
   * [Translation log](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/OUTPUT_LOG.md)


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu