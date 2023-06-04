import { H1, Link, Image, Bold, List, render } from 'jsx-to-md'
import { linkObj, imageObj } from '../constants'
import { getI18nPro } from '../utils'

export default function Vision() {
  return (
    <>
      <H1>{t('特性')}</H1>
      <List
        items={[
          'U',
          <>
            <Bold>{t('轻量')}</Bold>：
            <Link {...linkObj['i18n-pro-bundlesize']}>
              <Image {...imageObj['i18n-pro-bundlesize']} />
            </Link>
            {' + '}
            <Link {...linkObj.bundlesize}>
              <Image {...imageObj.bundlesize} />
            </Link>
          </>,
          [
            t('以下特性继承于{0}', getI18nPro('link')),
            [
              'U',
              render(<Bold>{t('简单')}</Bold>),
              render(<Bold>{t('灵活')}</Bold>),
              render(<Bold>{t('自动翻译')}</Bold>),
              render(<Bold>keyless</Bold>),
            ],
          ],
        ]}
      />
    </>
  )
}
