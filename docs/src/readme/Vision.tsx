import { Break, H1 } from 'jsx-to-md'

export default function Vision() {
  return (
    <>
      <Break />
      <H1>{t('愿景')}</H1>
      {t('为了让接入国际化成为轻松且愉快的事{0}', '😄💪🏻')}
    </>
  )
}
