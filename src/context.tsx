import { createContext, useContext } from 'react'
import { I18N, SetI18N, WithI18N } from 'i18n-pro'

let count = 0

const i18n: I18N = (t) => {
  if (count === 0) {
    console.warn('useI18N should be wrapped by Provider')
    count++
  }
  return t
}
const setI18N: SetI18N = (res) => ({ ...res, namespace: 'unknown' })
const withI18N: WithI18N = () => ({ i18n })

const i18nContext = createContext({ i18n, setI18N, withI18N })

export const InnerProvider = i18nContext.Provider

export function useI18N() {
  return useContext(i18nContext)
}
