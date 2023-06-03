import { ReactNode, useCallback, useMemo, useState } from 'react'
import { initI18n } from 'i18n-pro'
import type { I18nState, SetI18n } from 'i18n-pro'
import { InnerProvider } from './context'

export interface ProviderProps extends I18nState {
  children: ReactNode
}

export default function Provider(props: ProviderProps) {
  const { children, ...restProps } = props
  const [state, setState] = useState<I18nState>(restProps)
  const [{ t, setI18n }] = useState(() => initI18n(restProps))

  const setI18nProxy: SetI18n = useCallback((args) => {
    const newState = setI18n(args)
    setState(newState)

    return newState
  }, [])

  const proxyValue = useMemo(() => {
    return {
      setI18n: setI18nProxy,
      t,
      i18nState: state,
    }
  }, [state])

  return <InnerProvider value={proxyValue}>{children}</InnerProvider>
}
