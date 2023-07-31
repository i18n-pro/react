import { AsyncWrapper } from 'jsx-to-md'
import { getI18nProPackage } from '../utils'
import { Package } from '../types'
export interface I18nProWrapperProps {
  children: (i18nProPkg: Package) => JSX.Element
}

export default function I18nProWrapper(props: I18nProWrapperProps) {
  const i18nPackageInfo = getI18nProPackage()

  return <AsyncWrapper data={i18nPackageInfo}>{props.children}</AsyncWrapper>
}
