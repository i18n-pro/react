<div align="center">
  <p style="font-size: 18px;">Lightweight, simple, flexible, automatic translation internationalization tool for React</p>

English | [简体中文](https://github.com/i18n-pro/react/blob/v1.0.1/README_zh-CN.md)



[![npm-version](https://img.shields.io/npm/v/@i18n-pro/react.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/@i18n-pro/react "npm")
[![npm-download](https://img.shields.io/npm/dm/@i18n-pro/react "npm-download")](https://www.npmjs.com/package/@i18n-pro/react "npm")

[![github-stars](https://img.shields.io/github/stars/i18n-pro/react?style=social "github-stars")](https://github.com/i18n-pro/react/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/i18n-pro/react/main "last-commit")](https://github.com/i18n-pro/react/commits/main "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/i18n-pro/react "github-issues")](https://github.com/i18n-pro/react/issues "github-issues")
[![codecov](https://codecov.io/gh/i18n-pro/react/branch/main/graph/badge.svg?token=GQ6S1GPFCM "codecov")](https://codecov.io/gh/i18n-pro/react "codecov")

![demo](https://s3.bmp.ovh/imgs/2023/08/28/5c842995a00d48ae.gif)

</div>
<details >
  <summary>Table of Contents</summary>

  [Vision](#vision)<br/>
  [Requirement](#requirement)<br/>
  [Features](#features)<br/>
  [Live Demo](#live-demo)<br/>
  [Principle](#principle)<br/>
  [License](#license)<br/>

</details>


# Vision
To make internationalization easy and enjoyable 😄💪🏻
# Requirement

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

## 🌏  Open in the Cloud 
Click the button below to start a new development environment:

[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue?logo=visualstudiocode)](https://vscode.dev/github/i18n-pro/react-demo)
[![Open in Glitch](https://img.shields.io/badge/Open%20in-Glitch-blue?logo=glitch)](https://glitch.com/edit/#!/import/github/i18n-pro/react-demo)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/i18n-pro/react-demo)
[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/i18n-pro/react-demo)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/i18n-pro/react-demo)
[![Open in Repl.it](https://replit.com/badge/github/withastro/astro)](https://replit.com/github/i18n-pro/react-demo)
[![Open in Codeanywhere](https://codeanywhere.com/img/open-in-codeanywhere-btn.svg)](https://app.codeanywhere.com/#https://github.com/i18n-pro/react-demo)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/i18n-pro/react-demo)

# Live Demo

* [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/react-demo/main?file=README.md)
* [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/react-demo?file=README.md)


# Principle
This library is implemented based on  [i18n-pro](https://github.com/i18n-pro/core "i18n-pro")  combined with  `React` 's  `context`  feature

Mainly composed of  `2`  parts
* I18nProvider
* useI18n



**I18nProvider**：Configure container components for internationalization initialization properties

**useI18n**：Hook method for obtaining internationalization API and state



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

>To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br />The  `i18n-pro`  related link in the current document is based on the  `2.1.1`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage
* Current Library
   * [Quick Start](https://github.com/i18n-pro/react/blob/v1.0.1/docs/dist/USAGE.md)
   * [API](https://github.com/i18n-pro/react/blob/v1.0.1/docs/dist/API.md)
   * [Changelog](https://github.com/i18n-pro/react/blob/v1.0.1/docs/dist/CHANGELOG.md)
* i18n-pro
   * [Command Line](https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/COMMAND_LINE.md)
   * [Matching Rules](https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/MATCH_RULE.md)
   * [Q&A](https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/Q&A.md)
   * [Translation log](https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/OUTPUT_LOG.md)


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu