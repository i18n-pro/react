
# API

>To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br />The  `i18n-pro`  related link in the current document is based on the  `3.0.0-alpha.1`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage
<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[I18nProvider](#i18nprovider)<br/>
  &emsp;&emsp;&emsp;&emsp;[Type](#i18nprovider-type)<br/>
  &emsp;&emsp;&emsp;&emsp;[Parameter Description](#i18nprovider-parameter-description)<br/>
  &emsp;&emsp;[useI18n](#usei18n)<br/>
  &emsp;&emsp;&emsp;&emsp;[Type](#usei18n-type)<br/>

</details>

## I18nProvider
Configure container components for internationalization initialization properties
<h3 id="i18nprovider-type">Type</h3>
<pre>
(
  props: <a href="https://github.com/i18n-pro/core/blob/v3.0.0-alpha.1/docs/dist/API.md#i18nstate">I18nState</a> & { children: React.ReactNode },
) => JSX.Element
</pre>

<h3 id="i18nprovider-parameter-description">Parameter Description</h3>
The other parameters are consistent with the  <a href="https://github.com/i18n-pro/core/blob/v3.0.0-alpha.1/docs/dist/API.md#initi18n">initI18n</a>  parameters<table>
  <tr>
    <th>Parameter name</th>
    <th>Description</th>
  </tr>
  <tr>
    <tr>
      <td>children</td>
      <td>Content that requires internationalization</td>
    </tr>
  </tr>
</table>

## useI18n
Hook method for obtaining internationalization API and state
<h3 id="usei18n-type">Type</h3>
<pre>
() => ({
  <a href="https://github.com/i18n-pro/core/blob/v3.0.0-alpha.1/docs/dist/API.md#t">t</a>,
  <a href="https://github.com/i18n-pro/core/blob/v3.0.0-alpha.1/docs/dist/API.md#seti18n">setI18n</a>,
  <a href="https://github.com/i18n-pro/core/blob/v3.0.0-alpha.1/docs/dist/API.md#i18nstate">i18nState</a>,
})
</pre>

