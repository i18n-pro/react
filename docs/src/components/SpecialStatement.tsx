import { BlockQuote } from 'jsx-to-md'
import { getI18nPro } from '../utils'
import { Package } from '../types'
export interface SpecialStatementProps {
  i18nProPkg: Package
}

export default function SpecialStatement(props: SpecialStatementProps) {
  const { i18nProPkg } = props

  return (
    <>
      <BlockQuote>
        {t(
          '当前文档中{0}相关链接是基于{1}版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致',
          getI18nPro('tag'),
          ` \`${i18nProPkg.version}\` `,
        )}
      </BlockQuote>
    </>
  )
}
