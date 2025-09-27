
# Changelog


English | [简体中文](https://github.com/i18n-pro/react/blob/v2.0.1/docs/dist/CHANGELOG_zh-CN.md)


<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[[2.0.1] - 2025-09-27](#201---2025-09-27)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#201-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#201-api-fixed)<br/>
  &emsp;&emsp;[[2.0.0] - 2025-09-06](#200---2025-09-06)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#200-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Changed](#200-api-changed)<br/>
  &emsp;&emsp;[[1.0.2] - 2025-06-23](#102---2025-06-23)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#102-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Changed](#102-api-changed)<br/>
  &emsp;&emsp;[[1.0.1] - 2024-09-21](#101---2024-09-21)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#101-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Changed](#101-api-changed)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#101-api-fixed)<br/>
  &emsp;&emsp;[[1.0.0] - 2023-08-30](#100---2023-08-30)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#100-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#100-api-added)<br/>

</details>

## [2.0.1] - 2025-09-27

<h3 id="201-api">API</h3>

<h4 id="201-api-fixed">Fixed</h4>

* Fixed the issue where  `t`  was not updated in time after  `i18nState`  changed, resulting in text not updating when switching languages in some scenarios
```jsx
function Demo(){
  const { t } = useI18n()

  // t has not been updated, and it will not change after switching languages
  const text = useMemo(() => {
    return t('hello world')
  }, [t])

  return (
    <>
      <div>{text}</div>
    </>
  )
}
```



## [2.0.0] - 2025-09-06

<h3 id="200-api">API</h3>

<h4 id="200-api-changed">Changed</h4>

* Adapt  `i18n-pro@3` 


## [1.0.2] - 2025-06-23

<h3 id="102-api">API</h3>

<h4 id="102-api-changed">Changed</h4>

* Limit the version of  `i18n-pro` 


## [1.0.1] - 2024-09-21

<h3 id="101-api">API</h3>

<h4 id="101-api-changed">Changed</h4>

* Export more  `i18n-pro` 's  `TypeScript`  types.
   *  `SetI18n` 
   *  `Translate` 


<h4 id="101-api-fixed">Fixed</h4>

* Fix the issue where some bundlers cannot parse the  `module`  configuration in  `package.json` 


## [1.0.0] - 2023-08-30

<h3 id="100-api">API</h3>

<h4 id="100-api-added">Added</h4>

* Add  `I18nProvider`  and  `useI18n`  basic implementations

