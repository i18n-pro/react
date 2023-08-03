
# API

>为了避免不必要的重复文档内容，该库的部分文档是链接 `i18n-pro` 中的内容<br />当前文档中 `i18n-pro` 相关链接是基于 `2.0.0` 版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致
<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[I18nProvider](#i18nprovider)<br/>
  &emsp;&emsp;&emsp;&emsp;[类型](#i18nprovider-类型)<br/>
  &emsp;&emsp;&emsp;&emsp;[参数说明](#i18nprovider-参数说明)<br/>
  &emsp;&emsp;[useI18n](#usei18n)<br/>
  &emsp;&emsp;&emsp;&emsp;[类型](#usei18n-类型)<br/>

</details>

## I18nProvider
Configure container components for internationalization initialization properties
<h3 id="i18nprovider-类型">类型</h3>
<pre>
(
  props: I18nState & { children: React.ReactNode },
) => JSX.Element
</pre>

<h3 id="i18nprovider-参数说明">参数说明</h3>
其他属性与 <a href="https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/API.md#initi18n">initI18n</a> 参数一致<table>
  <tr>
    <th>参数名</th>
    <th>说明</th>
  </tr>
  <tr>
    <tr>
      <td>children</td>
      <td>需要国际化的内容</td>
    </tr>
  </tr>
</table>

## useI18n
Hook method for obtaining internationalization API and status
<h3 id="usei18n-类型">类型</h3>
<pre>
() => ({
  <a href="https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/API.md#t">t</a>,
  <a href="https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/API.md#seti18n">setI18n</a>,
  <a href="https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/API.md#i18nstate">i18nState</a>,
})
</pre>

