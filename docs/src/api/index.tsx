import { Break, H1, render, H3, TableOfContents, getAnchor } from 'jsx-to-md'
import I18nProWrapper from '../components/I18nProWrapper'
import SpecialStatement from '../components/SpecialStatement'
import { Package } from '../types'
import { getI18nProDocHref, initI18n } from '../utils'
import FunctionTemplate from './FunctionTemplate'

type I18nProProps = {
  i18nProPkg: Package
}

function I18nProvider(props: I18nProProps) {
  const { i18nProPkg } = props

  return (
    <>
      <FunctionTemplate
        name="I18nProvider"
        description={t('配置国际化初始化属性的容器组件')}
        type={`(
  props: I18nState & { children: React.ReactNode },
) => JSX.Element`}
        propsDesc={
          <>
            {t(
              '其他属性与{0}参数一致',
              ` ${render(
                <a href={getI18nProDocHref(i18nProPkg, 'API', 'initI18n')}>
                  initI18n
                </a>,
              )} `,
            )}
          </>
        }
        props={{
          children: t('需要国际化的内容'),
        }}
      />
    </>
  )
}

function UseI18n(props: I18nProProps) {
  const { i18nProPkg } = props

  function getTitleToA(title: string) {
    return render(
      <a href={getI18nProDocHref(i18nProPkg, 'API', title)}>{title}</a>,
    )
  }

  return (
    <>
      <FunctionTemplate
        name="useI18n"
        description={t('获取国际化 API 和状态的 hook 方法')}
        type={`() => ({
  ${getTitleToA('t')},
  ${getTitleToA('setI18n')},
  ${getTitleToA('i18nState')},
})`}
      />
    </>
  )
}

export default function API(props) {
  initI18n(props)

  return (
    <I18nProWrapper>
      {(i18nProPkg) => (
        <>
          <H1 skip>{t('API')}</H1>
          <SpecialStatement i18nProPkg={i18nProPkg} />
          <TableOfContents text={t('目录')} open={false} />
          <I18nProvider i18nProPkg={i18nProPkg} />
          <UseI18n i18nProPkg={i18nProPkg} />
        </>
      )}
    </I18nProWrapper>
  )
}
