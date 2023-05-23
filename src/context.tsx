import { createContext, useContext } from 'react'
import { Translate, SetI18n, I18nState } from 'i18n-pro'

let count = 0

const t: Translate = (t) => {
  if (count === 0) {
    console.warn('useI18n should be wrapped by Provider')
    count++
  }
  return t
}
const setI18n: SetI18n = (res) => ({ ...res, namespace: 'unknown' })

const defaultState: I18nState = {
  namespace: 'unknown',
}

const defaultContext = {
  t,
  setI18n,
  i18nState: defaultState,
}

const i18nContext = createContext(defaultContext)

export const InnerProvider = i18nContext.Provider

export function useI18n(): typeof defaultContext {
  return useContext(i18nContext)
}
