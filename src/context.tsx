import { createContext, useContext } from 'react'
import { Translate, SetI18n, WithI18n } from 'i18n-pro'

let count = 0

const t: Translate = (t) => {
  if (count === 0) {
    console.warn('useI18n should be wrapped by Provider')
    count++
  }
  return t
}
const setI18n: SetI18n = (res) => ({ ...res, namespace: 'unknown' })
const withI18n: WithI18n = () => ({ t })
const defaultContext = {
  t,
  setI18n,
  withI18n,
}

const i18nContext = createContext(defaultContext)

export const InnerProvider = i18nContext.Provider

export function useI18n(): [
  Translate,
  SetI18n,
  Omit<typeof defaultContext, 't' | 'setI18n'>,
] {
  const { t, setI18n, ...rest } = useContext(i18nContext)

  return [t, setI18n, rest]
}
