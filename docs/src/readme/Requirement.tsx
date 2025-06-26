import React, { H1, List } from 'jsx-to-md'

export default function Requirement() {
  return (
    <>
      <H1>{t('要求')}</H1>
      <List
        items={[
          'U',
          'react >= **16.8.0**',
          'react-dom >= **16.8.0**',
          'react-native >= **0.59.0**',
          'i18n-pro >= **3.0.0** < **4.0.0**',
        ]}
      />
    </>
  )
}
