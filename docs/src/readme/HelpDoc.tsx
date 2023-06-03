import { H1, List, Link } from 'jsx-to-md'
import { getDocHref } from '../utils'

export default function DocLink() {
  return (
    <>
      <H1>{t('帮助文档')}</H1>
      <List
        items={[
          'U',
          t('待更新'),
          // <Link href={getDocHref('USAGE')}>{t('快速上手')}</Link>,
          // <Link href={getDocHref('COMMAND_LINE')}>{t('命令行')}</Link>,
          // <Link href={getDocHref('API')}>{t('API')}</Link>,
          // <Link href={getDocHref('MATCH_RULE')}>{t('匹配规则')}</Link>,
          // <Link href={getDocHref('OUTPUT_LOG')}>{t('翻译日志')}</Link>,
          // <Link href={getDocHref('Q&A')}>Q&A</Link>,
          // <Link href={getDocHref('CHANGELOG')}>{t('更新日志')}</Link>,
        ]}
      />
    </>
  )
}
