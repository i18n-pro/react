
# API

>为了避免不必要的重复文档内容，该库的部分文档是链接 `i18n-pro` 中的内容<br />当前文档中 `i18n-pro` 相关链接是基于 `2.1.1` 版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致
<details >
  <summary>目录</summary>

  &emsp;&emsp;[I18nProvider](#i18nprovider)<br/>
  &emsp;&emsp;&emsp;&emsp;[类型](#i18nprovider-类型)<br/>
  &emsp;&emsp;&emsp;&emsp;[参数说明](#i18nprovider-参数说明)<br/>
  &emsp;&emsp;[useI18n](#usei18n)<br/>
  &emsp;&emsp;&emsp;&emsp;[类型](#usei18n-类型)<br/>

</details>

## I18nProvider
配置国际化初始化属性的容器组件
<h3 id="i18nprovider-类型">类型</h3>
<pre>
(
  props: <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API_zh-CN.md#i18nstate">I18nState</a> & { children: React.ReactNode },
) => JSX.Element
</pre>

<h3 id="i18nprovider-参数说明">参数说明</h3>
其他参数与 <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API_zh-CN.md#initi18n">initI18n</a> 参数一致<table>
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
获取国际化 API 和状态的 hook 方法
<h3 id="usei18n-类型">类型</h3>
<pre>
() => ({
  <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API_zh-CN.md#t">t</a>,
  <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API_zh-CN.md#seti18n">setI18n</a>,
  <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API_zh-CN.md#i18nstate">i18nState</a>,
})
</pre>

