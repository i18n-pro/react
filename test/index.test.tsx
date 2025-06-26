import React, { memo } from 'react'
import type { SetI18n } from '../src'
import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { I18nProvider, useI18n } from '../src'

it('No I18nProvider is used', () => {
  const renderCountRef = {
    current: 0,
  }

  function Content() {
    const { t, setI18n } = useI18n()

    renderCountRef.current++

    return (
      <>
        <div id="text">{t('你好世界')}</div>
        <div>{t('测试警告')}</div>
        <div>{t('测试警告')}</div>
        <button id="zhBtn" onClick={() => setI18n({ locale: 'zh' })}>
          简体中文
        </button>
        <button id="enBtn" onClick={() => setI18n({ locale: 'en' })}>
          English
        </button>
        <button id="unknownBtn" onClick={() => setI18n({ locale: undefined })}>
          English
        </button>
      </>
    )
  }

  const MemoContent = memo(Content)

  function App() {
    return <MemoContent />
  }

  const spyWarn = vi.spyOn(console, 'warn')

  const { container } = render(<App />)

  const textWrapper = container.querySelector('#text')
  const zhBtn = container.querySelector('#zhBtn') as Element
  const enBtn = container.querySelector('#enBtn') as Element
  const unknownBtn = container.querySelector('#unknownBtn') as Element

  expect(textWrapper).toHaveTextContent('你好世界')
  expect(renderCountRef.current).toBe(1)

  fireEvent.click(enBtn)
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(renderCountRef.current).toBe(1)

  fireEvent.click(zhBtn)
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(renderCountRef.current).toBe(1)

  fireEvent.click(enBtn)
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(renderCountRef.current).toBe(1)

  fireEvent.click(unknownBtn)
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(renderCountRef.current).toBe(1)

  expect(spyWarn).toHaveBeenCalledTimes(1)
  expect(spyWarn).toHaveBeenCalledWith('useI18n should be wrapped by Provider')
})

describe('Full Test', () => {
  it('Single', async () => {
    const renderCountRef = {
      current: 0,
    }

    const setI18nRef = {
      current: {} as SetI18n,
    }

    function Content() {
      const { t, setI18n } = useI18n()

      renderCountRef.current++
      setI18nRef.current = setI18n

      return (
        <>
          <div id="text">{t('你好世界')}</div>
          <div id="customKeyText">{t.t('custom-key', '你好世界')}</div>
        </>
      )
    }

    const MemoContent = memo(Content)

    function App() {
      return (
        <I18nProvider
          namespace="t-pro-test"
          langs={{
            en: {
              你好世界: 'Hello World',
              'custom-key': 'Hello World',
            },
          }}
        >
          <div>a</div>
          <MemoContent />
        </I18nProvider>
      )
    }

    const { container } = render(<App />)

    const textWrapper = container.querySelector('#text')
    const customKeyTextWrapper = container.querySelector('#customKeyText')

    expect(textWrapper).toHaveTextContent('你好世界')
    expect(customKeyTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(1)

    await setI18nRef.current({
      locale: 'en',
    })
    expect(textWrapper).toHaveTextContent('Hello World')
    expect(customKeyTextWrapper).toHaveTextContent('Hello World')
    expect(renderCountRef.current).toBe(2)

    await setI18nRef.current({
      locale: 'zh',
    })
    expect(textWrapper).toHaveTextContent('你好世界')
    expect(customKeyTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(3)

    await setI18nRef.current({
      locale: 'en',
    })
    expect(textWrapper).toHaveTextContent('Hello World')
    expect(customKeyTextWrapper).toHaveTextContent('Hello World')
    expect(renderCountRef.current).toBe(4)

    await setI18nRef.current({
      locale: 'unknown',
    })
    expect(textWrapper).toHaveTextContent('你好世界')
    expect(customKeyTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(5)

    await setI18nRef.current({
      locale: 'jp',
      langs: {
        jp: {
          你好世界: 'こんにちは、世界',
          'custom-key': 'こんにちは、世界',
        },
      },
    })
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(customKeyTextWrapper).toHaveTextContent('こんにちは、世界')
    expect(renderCountRef.current).toBe(6)
  })

  it('Nested', async () => {
    const renderCountRef = {
      current: 0,
    }
    const nestedRenderCountRef = {
      current: 0,
    }

    const PREFIX = 'nested'

    const outSetI18nRef = {
      current: {} as SetI18n,
    }

    const nestedSetI18nRef = {
      current: {} as SetI18n,
    }

    function getContent(props: {
      prefix?: string
      NestedComponent?: React.FC
    }) {
      const { prefix = '', NestedComponent: ChildComponent = () => null } =
        props

      return function Content() {
        const { t, setI18n } = useI18n()

        if (prefix) {
          nestedSetI18nRef.current = setI18n
        } else {
          outSetI18nRef.current = setI18n
        }

        function getId(id: string) {
          if (!prefix) return id
          id = prefix + id[0].toUpperCase() + id.substring(1)
          return id
        }

        if (prefix) {
          nestedRenderCountRef.current++
        } else {
          renderCountRef.current++
        }

        return (
          <>
            <div id={getId('text')}>{t('你好世界')}</div>
            <div id={getId('customKeyText')}>
              {t.t('custom-key', '你好世界')}
            </div>
            <ChildComponent />
          </>
        )
      }
    }

    const ChildMemoContent = memo(getContent({ prefix: PREFIX }))

    function NestedApp() {
      return (
        <I18nProvider
          namespace="full-test-nested"
          langs={{
            en: {
              你好世界: 'Hello World',
              'custom-key': 'Hello World',
            },
          }}
        >
          <div>a</div>
          <ChildMemoContent />
        </I18nProvider>
      )
    }

    const MemoContent = memo(getContent({ NestedComponent: NestedApp }))

    function App() {
      return (
        <I18nProvider
          namespace="full-test-out"
          langs={{
            en: {
              你好世界: 'Hello World',
              'custom-key': 'Hello World',
            },
          }}
        >
          <div>a</div>
          <MemoContent />
        </I18nProvider>
      )
    }

    const { container } = render(<App />)

    const textWrapper = container.querySelector('#text')
    const customKeyTextWrapper = container.querySelector('#customKeyText')
    const nestedTextWrapper = container.querySelector('#nestedText')
    const nestedCustomKeyTextWrapper = container.querySelector(
      '#nestedCustomKeyText',
    )

    expect(textWrapper).toHaveTextContent('你好世界')
    expect(customKeyTextWrapper).toHaveTextContent('你好世界')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(nestedCustomKeyTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(1)
    expect(nestedRenderCountRef.current).toBe(1)

    // Out Switch

    await outSetI18nRef.current({
      locale: 'en',
    })
    expect(textWrapper).toHaveTextContent('Hello World')
    expect(customKeyTextWrapper).toHaveTextContent('Hello World')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(nestedCustomKeyTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(2)
    expect(nestedRenderCountRef.current).toBe(1)

    await outSetI18nRef.current({
      locale: 'zh',
    })
    expect(textWrapper).toHaveTextContent('你好世界')
    expect(customKeyTextWrapper).toHaveTextContent('你好世界')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(nestedCustomKeyTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(3)
    expect(nestedRenderCountRef.current).toBe(1)

    await outSetI18nRef.current({
      locale: 'en',
    })
    expect(textWrapper).toHaveTextContent('Hello World')
    expect(customKeyTextWrapper).toHaveTextContent('Hello World')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(nestedCustomKeyTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(4)
    expect(nestedRenderCountRef.current).toBe(1)

    await outSetI18nRef.current({
      locale: 'unknown',
    })
    expect(textWrapper).toHaveTextContent('你好世界')
    expect(customKeyTextWrapper).toHaveTextContent('你好世界')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(nestedCustomKeyTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(5)
    expect(nestedRenderCountRef.current).toBe(1)

    await outSetI18nRef.current({
      locale: 'jp',
      langs: {
        jp: {
          你好世界: 'こんにちは、世界',
          'custom-key': 'こんにちは、世界',
        },
      },
    })
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(customKeyTextWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(nestedCustomKeyTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(6)
    expect(nestedRenderCountRef.current).toBe(1)

    // // Nested Switch

    await nestedSetI18nRef.current({
      locale: 'en',
    })
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(customKeyTextWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedTextWrapper).toHaveTextContent('Hello World')
    expect(nestedCustomKeyTextWrapper).toHaveTextContent('Hello World')
    expect(renderCountRef.current).toBe(6)
    expect(nestedRenderCountRef.current).toBe(2)

    await nestedSetI18nRef.current({
      locale: 'zh',
    })
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(customKeyTextWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(nestedCustomKeyTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(6)
    expect(nestedRenderCountRef.current).toBe(3)

    await nestedSetI18nRef.current({
      locale: 'en',
    })
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(customKeyTextWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedTextWrapper).toHaveTextContent('Hello World')
    expect(nestedCustomKeyTextWrapper).toHaveTextContent('Hello World')
    expect(renderCountRef.current).toBe(6)
    expect(nestedRenderCountRef.current).toBe(4)

    await nestedSetI18nRef.current({
      locale: 'unknown',
    })
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(customKeyTextWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(nestedCustomKeyTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(6)
    expect(nestedRenderCountRef.current).toBe(5)

    await nestedSetI18nRef.current({
      locale: 'jp',
      langs: {
        jp: {
          你好世界: 'こんにちは、世界',
          'custom-key': 'こんにちは、世界',
        },
      },
    })
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(customKeyTextWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedTextWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedCustomKeyTextWrapper).toHaveTextContent('こんにちは、世界')
    expect(renderCountRef.current).toBe(6)
    expect(nestedRenderCountRef.current).toBe(6)
  })
})
