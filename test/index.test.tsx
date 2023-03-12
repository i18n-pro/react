import React, { memo } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider, useI18N } from '../src'

it('No Provider is used', () => {
  const renderCountRef = {
    current: 0,
  }

  function Content() {
    const { i18n, setI18N, withI18N } = useI18N()

    renderCountRef.current++

    const { i18n: t } = withI18N({
      locale: 'en',
    })

    return (
      <>
        <div id="text">{i18n('你好世界')}</div>
        <div>{i18n('测试警告')}</div>
        <div>{t('测试警告')}</div>
        <button id="zhBtn" onClick={() => setI18N({ locale: 'zh' })}>
          简体中文
        </button>
        <button id="enBtn" onClick={() => setI18N({ locale: 'en' })}>
          English
        </button>
        <button id="unknownBtn" onClick={() => setI18N({ locale: undefined })}>
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
  expect(spyWarn).toHaveBeenCalledWith('useI18N should be wrapped by Provider')
})

describe('Full Test', () => {
  it('Single', () => {
    const renderCountRef = {
      current: 0,
    }

    function Content() {
      const { i18n, setI18N, withI18N } = useI18N()

      renderCountRef.current++

      const { i18n: t } = withI18N({ locale: 'en' })

      return (
        <>
          <div id="text">{i18n('你好世界')}</div>
          <div id="fixedLocaleText">{t('你好世界')}</div>
          <button id="zhBtn" onClick={() => setI18N({ locale: 'zh' })}>
            简体中文
          </button>
          <button id="enBtn" onClick={() => setI18N({ locale: 'en' })}>
            English
          </button>
          <button
            id="unknownBtn"
            onClick={() => setI18N({ locale: undefined })}
          >
            English
          </button>
          <button
            id="jpBtn"
            onClick={() =>
              setI18N({
                locale: 'jp',
                langs: {
                  jp: {
                    你好世界: 'こんにちは、世界',
                  },
                },
              })
            }
          >
            English
          </button>
        </>
      )
    }

    const MemoContent = memo(Content)

    function App() {
      return (
        <Provider
          namespace="i18n-pro-test"
          langs={{
            en: {
              你好世界: 'Hello World',
            },
          }}
        >
          <div>a</div>
          <MemoContent />
        </Provider>
      )
    }

    const { container } = render(<App />)

    const textWrapper = container.querySelector('#text')
    const fixedLocaleTextWrapper = container.querySelector('#fixedLocaleText')
    const zhBtn = container.querySelector('#zhBtn') as Element
    const enBtn = container.querySelector('#enBtn') as Element
    const unknownBtn = container.querySelector('#unknownBtn') as Element
    const jpBtn = container.querySelector('#jpBtn') as Element

    expect(textWrapper).toHaveTextContent('你好世界')
    expect(fixedLocaleTextWrapper).toHaveTextContent('Hello World')
    expect(renderCountRef.current).toBe(1)

    fireEvent.click(enBtn)
    expect(textWrapper).toHaveTextContent('Hello World')
    expect(fixedLocaleTextWrapper).toHaveTextContent('Hello World')
    expect(renderCountRef.current).toBe(2)

    fireEvent.click(zhBtn)
    expect(textWrapper).toHaveTextContent('你好世界')
    expect(fixedLocaleTextWrapper).toHaveTextContent('Hello World')
    expect(renderCountRef.current).toBe(3)

    fireEvent.click(enBtn)
    expect(textWrapper).toHaveTextContent('Hello World')
    expect(fixedLocaleTextWrapper).toHaveTextContent('Hello World')
    expect(renderCountRef.current).toBe(4)

    fireEvent.click(unknownBtn)
    expect(textWrapper).toHaveTextContent('你好世界')
    expect(fixedLocaleTextWrapper).toHaveTextContent('Hello World')
    expect(renderCountRef.current).toBe(5)

    fireEvent.click(jpBtn)
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(fixedLocaleTextWrapper).toHaveTextContent('Hello World')
    expect(renderCountRef.current).toBe(6)
  })

  it('Nested', () => {
    const renderCountRef = {
      current: 0,
    }
    const nestedRenderCountRef = {
      current: 0,
    }

    const PREFIX = 'nested'

    function getContent(props: {
      prefix?: string
      NestedComponent?: React.FC
    }) {
      const { prefix = '', NestedComponent: ChildComponent = () => null } =
        props

      return function Content() {
        const { i18n, setI18N } = useI18N()

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
            <div id={getId('text')}>{i18n('你好世界')}</div>
            <button
              id={getId('zhBtn')}
              onClick={() => setI18N({ locale: 'zh' })}
            >
              简体中文
            </button>
            <button
              id={getId('enBtn')}
              onClick={() => setI18N({ locale: 'en' })}
            >
              English
            </button>
            <button
              id={getId('unknownBtn')}
              onClick={() => setI18N({ locale: undefined })}
            >
              English
            </button>
            <button
              id={getId('jpBtn')}
              onClick={() =>
                setI18N({
                  locale: 'jp',
                  langs: {
                    jp: {
                      你好世界: 'こんにちは、世界',
                    },
                  },
                })
              }
            >
              English
            </button>
            <ChildComponent />
          </>
        )
      }
    }

    const ChildMemoContent = memo(getContent({ prefix: PREFIX }))

    function NestedApp() {
      return (
        <Provider
          namespace="full-test-nested"
          langs={{
            en: {
              你好世界: 'Hello World',
            },
          }}
        >
          <div>a</div>
          <ChildMemoContent />
        </Provider>
      )
    }

    const MemoContent = memo(getContent({ NestedComponent: NestedApp }))

    function App() {
      return (
        <Provider
          namespace="full-test-out"
          langs={{
            en: {
              你好世界: 'Hello World',
            },
          }}
        >
          <div>a</div>
          <MemoContent />
        </Provider>
      )
    }

    const { container } = render(<App />)

    const textWrapper = container.querySelector('#text')
    const nestedTextWrapper = container.querySelector('#nestedText')
    const zhBtn = container.querySelector('#zhBtn') as Element
    const nestedZhBtn = container.querySelector('#nestedZhBtn') as Element
    const enBtn = container.querySelector('#enBtn') as Element
    const nestedEnBtn = container.querySelector('#nestedEnBtn') as Element
    const unknownBtn = container.querySelector('#unknownBtn') as Element
    const nestedUnknownBtn = container.querySelector(
      '#nestedUnknownBtn',
    ) as Element
    const jpBtn = container.querySelector('#jpBtn') as Element
    const nestedJpBtn = container.querySelector('#nestedJpBtn') as Element

    expect(textWrapper).toHaveTextContent('你好世界')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(1)
    expect(nestedRenderCountRef.current).toBe(1)

    // Out Switch

    fireEvent.click(enBtn)
    expect(textWrapper).toHaveTextContent('Hello World')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(2)
    expect(nestedRenderCountRef.current).toBe(1)

    fireEvent.click(zhBtn)
    expect(textWrapper).toHaveTextContent('你好世界')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(3)
    expect(nestedRenderCountRef.current).toBe(1)

    fireEvent.click(enBtn)
    expect(textWrapper).toHaveTextContent('Hello World')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(4)
    expect(nestedRenderCountRef.current).toBe(1)

    fireEvent.click(unknownBtn)
    expect(textWrapper).toHaveTextContent('你好世界')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(5)
    expect(nestedRenderCountRef.current).toBe(1)

    fireEvent.click(jpBtn)
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(6)
    expect(nestedRenderCountRef.current).toBe(1)

    // Nested Switch

    fireEvent.click(nestedEnBtn)
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedTextWrapper).toHaveTextContent('Hello World')
    expect(renderCountRef.current).toBe(6)
    expect(nestedRenderCountRef.current).toBe(2)

    fireEvent.click(nestedZhBtn)
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(6)
    expect(nestedRenderCountRef.current).toBe(3)

    fireEvent.click(nestedEnBtn)
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedTextWrapper).toHaveTextContent('Hello World')
    expect(renderCountRef.current).toBe(6)
    expect(nestedRenderCountRef.current).toBe(4)

    fireEvent.click(nestedUnknownBtn)
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedTextWrapper).toHaveTextContent('你好世界')
    expect(renderCountRef.current).toBe(6)
    expect(nestedRenderCountRef.current).toBe(5)

    fireEvent.click(nestedJpBtn)
    expect(textWrapper).toHaveTextContent('こんにちは、世界')
    expect(nestedTextWrapper).toHaveTextContent('こんにちは、世界')
    expect(renderCountRef.current).toBe(6)
    expect(nestedRenderCountRef.current).toBe(6)
  })
})
