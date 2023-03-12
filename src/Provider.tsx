import React, { ReactNode, useCallback, useMemo, useState } from 'react'
import { initI18N } from 'i18n-pro'
import type { I18NState, SetI18N } from 'i18n-pro'
import { InnerProvider } from './context'

export interface ProviderProps extends I18NState {
  children: ReactNode
}

export default function Provider(props: ProviderProps) {
  const { children, ...restProps } = props
  const [state, setState] = useState<I18NState>(restProps)
  const [{ i18n, setI18N, withI18N }] = useState(() => initI18N(restProps))

  const setI18NProxy: SetI18N = useCallback((args) => {
    const newState = setI18N(args)
    setState(newState)

    return newState
  }, [])

  const proxyValue = useMemo(() => {
    return {
      setI18N: setI18NProxy,
      i18n,
      withI18N,
    }
  }, [state])

  return <InnerProvider value={proxyValue}>{children}</InnerProvider>
}
