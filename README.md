<div align="center">
  <p style="font-size: 18px;">Lightweight, simple, flexible, automatic translation internationalization tool for React</p>

English | [简体中文](https://github.com/i18n-pro/react-i18n-pro/blob/v0.1.0-alpha.1/README_zh-CN.md)



[![npm-version](https://img.shields.io/npm/v/@i18n-pro/react.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/@i18n-pro/react "npm")
[![npm-download](https://img.shields.io/npm/dm/@i18n-pro/react "npm-download")](https://www.npmjs.com/package/@i18n-pro/react "npm")

[![github-stars](https://img.shields.io/github/stars/i18n-pro/react-i18n-pro?style=social "github-stars")](https://github.com/i18n-pro/react-i18n-pro/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/i18n-pro/react-i18n-pro/dev "last-commit")](https://github.com/i18n-pro/react-i18n-pro/commits/dev "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/i18n-pro/react-i18n-pro "github-issues")](https://github.com/i18n-pro/react-i18n-pro/issues "github-issues")
[![codecov](https://codecov.io/gh/i18n-pro/react-i18n-pro/branch/main/graph/badge.svg?token=758C46SIE7 "codecov")](https://codecov.io/gh/eyelly-wu/react-i18n-pro "codecov")

</div>
<details >
  <summary>Table of Contents</summary>

  [Vision](#vision)<br/>
  [Features](#features)<br/>
  [Live Demo](#live-demo)<br/>
  [Principle](#principle)<br/>
  [Help Document](#help-document)<br/>
  [License](#license)<br/>

</details>


# Vision
To make internationalization easy and enjoyable 😄💪🏻
# Features

* **lightweight**：[![bundlesize](https://img.shields.io/bundlephobia/minzip/i18n-pro?color=brightgreen&style=plastic "i18n-pro-bundlesize")](https://bundlephobia.com/package/i18n-pro "i18n-pro-bundlesize") + [![bundlesize](https://img.shields.io/bundlephobia/minzip/@i18n-pro/react?color=brightgreen&style=plastic "bundlesize")](https://bundlephobia.com/package/@i18n-pro/react "bundlesize")
* The following characteristics are inherited from  [i18n-pro](https://github.com/eyelly-wu/i18n-pro "i18n-pro") 
   * **simple**
   * **flexible**
   * **automatic-translation**
   * **keyless**


# Live Demo

* [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/react-i18n-pro-demo/main?file=README.md)
* [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/edit/react-i18n-pro-demo?file=README.md)


# Principle
This library is implemented based on  [i18n-pro](https://github.com/eyelly-wu/i18n-pro "i18n-pro")  combined with  `React` 's  `context`  feature

Mainly composed of three parts
* Provider
* useI18n
* i18nContext



**Provider**：Configure container components for internationalization initialization properties

**useI18n**：Hook method for obtaining internationalization API and status

**i18nContext**：As a transitive attribute, it is also the key to achieving internationalization in  `React` , and  `useI18n`  is also based on this implementation

A simple example is as follows
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

# Help Document

* To be updated


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu