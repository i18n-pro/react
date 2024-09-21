import React, { H1, TableOfContents } from 'jsx-to-md'
import { initI18n, renderLanguage } from '../utils'
import Template from './ChangeLog'

function V_1_0_0() {
  return (
    <Template
      version="1.0.0"
      date="2023-08-30"
      api={{
        added: [
          'U',
          t('新增{0}和{1}基础实现', ' `I18nProvider` ', ' `useI18n` '),
        ],
      }}
    />
  )
}

function V_1_0_1() {
  return (
    <Template
      version="1.0.1"
      date="2024-09-21"
      api={{
        changed: [
          'U',
          [
            t('导出{0}更多的{1}类型', ' `i18n-pro` ', ' `TypeScript` '),
            ['U', ' `SetI18n` ', ' `Translate` '],
          ],
        ],
        fixed: [
          'U',
          t(
            '修复部分场景打包器不能解析{0}中{1}配置',
            ' `package.json` ',
            ' `module` ',
          ),
        ],
      }}
    />
  )
}

export default function ChangeLog(props) {
  initI18n(props)

  return (
    <>
      <H1 skip>{t('更新日志')}</H1>
      {renderLanguage('CHANGELOG')}
      <TableOfContents text={t('目录')} open={false} />
      <V_1_0_1 />
      <V_1_0_0 />
    </>
  )
}
