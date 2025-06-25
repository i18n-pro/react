import React, { H1, Link, Image, List } from 'jsx-to-md'
import { githubKey } from '../constants'

export default function LiveDemo() {
  const localeSuffixMap = {
    zh: 'zh-CN',
    en: '',
  }

  const suffix = localeSuffixMap[global.docLocale]

  const filename = `README${suffix ? `_${suffix}` : ''}.md`
  return (
    <>
      <H1>Live Demo</H1>
      <List
        items={[
          'U',
          <Link
            href={`https://codesandbox.io/p/github/${githubKey}-demo/v2?file=${filename}`}
          >
            Open in CodeSandbox
          </Link>,
          <Link
            href={`https://stackblitz.com/github/i18n-pro/react-demo/tree/v2?file=${filename}`}
          >
            <Image
              alt="Open in StackBlitz"
              title="Open in StackBlitz"
              src="https://developer.stackblitz.com/img/open_in_stackblitz_small.svg"
            />
          </Link>,
        ]}
      />
    </>
  )
}
