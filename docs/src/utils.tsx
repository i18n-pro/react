import { getAnchor, Link, render, Break } from 'jsx-to-md'
import { initI18n as originInitI18n, Translate } from 'i18n-pro'
import { readFileSync } from 'fs'
import en from './i18n/en.json'
import packageInfo, { name } from '../../package.json'
import fetch from './fetch'
import { Package } from './types'
import { langs } from './constants'

const { t, setI18n } = originInitI18n({ namespace: 'default' })

declare global {
  const t: Translate
}

;(global as any).t = t

export function initI18n({ locale }) {
  setI18n({
    locale,
    langs: {
      en,
    },
  })

  global.docLocale = locale
}

export function getDocHrefImpl(
  packageInfo: Package,
  filename: string,
  anchorProp?: string,
  localeProp?: string,
) {
  const { version, codeNameMap, homepage } = packageInfo
  const locale = localeProp || global.docLocale
  let name = codeNameMap[locale]
  name = name ? `_${name}` : ''
  const anchor = anchorProp ? getAnchor(anchorProp) : ''

  if (filename === 'README') {
    return locale === 'en'
      ? `${homepage}/tree/v${version}${anchor}`
      : `${homepage}/blob/v${version}/${filename}${name}.md${anchor}`
  } else {
    return `${homepage}/blob/v${version}/docs/dist/${filename}${name}.md${anchor}`
  }
}

export function getDocHref(
  filename: string,
  anchorProp?: string,
  localeProp?: string,
) {
  return getDocHrefImpl(packageInfo, filename, anchorProp, localeProp)
}

export function getI18nProDocHref(
  i18nProPkg: Package,
  filename: string,
  anchorProp?: string,
) {
  return getDocHrefImpl(i18nProPkg, filename, anchorProp)
}

export function getFileContent(filepath: string) {
  const res = readFileSync(filepath, { encoding: 'utf-8' })
  return res
}

export function getIssueText(
  text: string,
  props: {
    issue?: number | number[]
    by?: string
  } = {},
) {
  const { issue, by } = props

  let showIssue: number[] | string = typeof issue === 'number' ? [issue] : issue

  showIssue =
    Array.isArray(showIssue) && showIssue.length
      ? showIssue.reduce((res, item, index) => {
          res += `${index === 0 ? '' : ' '}[#${item}](${
            packageInfo.bugs.url
          }/${item})`
          return res
        }, ' ')
      : ''

  const showBy = by ? ` by @[${by}](https://github.com/${by})` : ''

  return `${text}${showIssue}${showBy}`
}

function getText(text: string, normal = false) {
  if (normal) return text
  return ` \`${text}\` `
}

export function getTranslationText(normal = false) {
  const text = t('翻译文案')
  return getText(text, normal)
}

export function getI18nPro(type: 'text' | 'tag' | 'link', version?: string) {
  const text = `i18n-pro${version ? `@${version}` : ''}`
  if (type === 'text') return text
  let url = 'https://github.com/i18n-pro/core'

  if (version) {
    url += `/tree/v${version}`
  }

  const typeMap = {
    tag: ` \`${text}\` `,
    link: ` ${render(
      <Link title={text} href={url}>
        {text}
      </Link>,
    )} `,
  }

  return typeMap[type]
}

export function getPackageName() {
  return name.slice(1)
}

export const packageName = getPackageName()

function requestCache<T>(key: string, request: () => Promise<T>): Promise<T> {
  if (!requestCache[key]) {
    requestCache[key] = request()
  }

  return requestCache[key]
}

export async function getI18nProFileImpl(path?: string): Promise<string> {
  // const base = 'https://jsd.linux.sh.cn/gh/i18n-pro/core@main'
  const base = 'https://fastly.jsdelivr.net/gh/i18n-pro/core@main'
  // const base = 'https://raw.githubusercontent.com/i18n-pro/core/main'

  let res = t(`获取文件${path}错误`)
  try {
    console.log('request', path)
    res = (await fetch(`${base}${path}`, {
      headers: {
        Accept: 'text/plain; charset=utf-8',
      },
      data: '',
    })) as string
    // console.log({ res })
  } catch (error) {
    res += '\n' + error
    console.error(error)
  }

  return res
}

export async function getI18nProPackage() {
  const filepath = '/package.json'
  const content = await requestCache(filepath, () =>
    getI18nProFileImpl(filepath),
  )
  let packageInfo = {
    name: 'error',
    version: 'error',
    homepage: 'error',
    codeNameMap: {} as any,
  }
  try {
    packageInfo = JSON.parse(content)
  } catch (error) {
    console.log(error)
  }
  return packageInfo
}

export async function getI18nProFile(
  filepath: string,
): Promise<{ content: string }> {
  const content = await requestCache(filepath, () =>
    getI18nProFileImpl(filepath),
  )

  return { content }
}

export function getVariableInterpolation(normal = false) {
  const text = t('变量插值')
  return getText(text, normal)
}

export function getInterpolationVariable(normal = false) {
  const text = t('插值变量')
  return getText(text, normal)
}

export function renderLanguage(filename: string) {
  const separator = ' | '

  const res = langs.reduce((res, item, index) => {
    const { code, name } = item

    if (global.docLocale == code) {
      res.push(name)
    } else {
      res.push(<Link href={getDocHref(filename, undefined, code)}>{name}</Link>)
    }

    if (index != langs.length - 1) {
      res.push(separator)
    }

    return res
  }, [])
  return (
    <>
      <Break />
      <Break />
      {res}
      <Break />
      <Break />
    </>
  )
}

export function getI18nProviderDesc() {
  return t('配置国际化初始化属性的容器组件')
}

export function getUseI18nDesc() {
  return t('获取国际化 API 和状态的 hook 方法')
}
