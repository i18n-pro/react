import { Image, Link, ArrayObject } from './readme/types'
import { name, homepage } from '../../package.json'

export const githubKey = homepage.split('com/')[1]

export const langs = [
  {
    code: 'en',
    locale: 'en-US',
    name: 'English',
  },
  {
    code: 'zh',
    locale: 'zh-CN',
    name: '简体中文',
  },
]

const links = [
  {
    title: 'npm',
    href: `https://www.npmjs.com/package/${name}`,
  },
  {
    title: 'github',
    href: homepage,
  },
  {
    title: 'bundlesize',
    href: `https://bundlephobia.com/package/${name}`,
  },
  {
    title: 'github-stars',
    href: `${homepage}/stargazers`,
  },
  {
    title: 'last-commit',
    href: `${homepage}/commits/main`,
  },
  {
    title: 'github-issues',
    href: `${homepage}/issues`,
  },
  {
    title: 'codecov',
    href: `https://codecov.io/gh/${githubKey}`,
  },
  {
    title: 'i18n-pro-bundlesize',
    href: 'https://bundlephobia.com/package/i18n-pro',
  },
] as const

type LinkTitleType = ArrayObject<typeof links, 'title'>

type LinkObject = Record<LinkTitleType, Link>

export const linkObj = links.reduce((res, item) => {
  res[item.title] = item
  return res
}, {} as LinkObject)

const images = [
  {
    title: 'npm-version',
    alt: 'npm-version',
    src: `https://img.shields.io/npm/v/${name}.svg?style=flat-square`,
  },
  {
    title: 'npm-download',
    alt: 'npm-download',
    src: `https://img.shields.io/npm/dm/${name}`,
  },
  {
    title: 'bundlesize',
    alt: 'bundlesize',
    src: `https://img.shields.io/bundlephobia/minzip/${name}?color=brightgreen&style=plastic`,
  },
  {
    title: 'i18n-pro-bundlesize',
    alt: 'bundlesize',
    src: 'https://img.shields.io/bundlephobia/minzip/i18n-pro?color=brightgreen&style=plastic',
  },
  {
    title: 'github-stars',
    alt: 'github-stars',
    src: `https://img.shields.io/github/stars/${githubKey}?style=social`,
  },
  {
    title: 'last-commit',
    alt: 'last-commit',
    src: `https://img.shields.io/github/last-commit/${githubKey}/main`,
  },
  {
    title: 'github-issues',
    alt: 'github-issues',
    src: `https://img.shields.io/github/issues-raw/${githubKey}`,
  },
  {
    title: 'codecov',
    alt: 'codecov',
    src: `https://codecov.io/gh/${githubKey}/branch/main/graph/badge.svg?token=GQ6S1GPFCM`,
  },
] as const

type ImageTitleType = ArrayObject<typeof images, 'title'>

type ImageObject = Record<ImageTitleType, Image>

export const imageObj = images.reduce((res, item) => {
  res[item.title] = item
  return res
}, {} as ImageObject)
