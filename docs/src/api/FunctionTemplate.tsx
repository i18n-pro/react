import { Break, H2, H3 } from 'jsx-to-md'

export interface FunctionTemplate {
  name: string
  description: string | React.ReactNode
  type: string
  props?: Record<string, string | JSX.Element>
  propsDesc?: string | JSX.Element
  returns?: unknown
}

function TypeCode(props: { content: string }) {
  const { content } = props
  return <pre>{content}</pre>
}

export default function FunctionTemplate(props: FunctionTemplate) {
  const {
    name,
    description,
    type,
    props: propsProp,
    propsDesc,
    returns,
  } = props

  const typeText = t('类型')
  const propsText = t('参数说明')
  const getId = (title: string) => `${name}-${title}`

  return (
    <>
      <H2>{name}</H2>
      {description}
      <H3 id={getId(typeText)}>{typeText}</H3>
      <TypeCode content={type} />
      <Break />
      {propsProp && (
        <>
          <H3 id={getId(propsText)}>{propsText}</H3>
          {propsDesc}
          <table>
            <tr>
              <th>{t('参数名')}</th>
              <th>{t('说明')}</th>
            </tr>
            <tr>
              {Object.entries(propsProp).map(([key, desc]) => {
                return (
                  <tr>
                    <td>{key}</td>
                    <td>{desc}</td>
                  </tr>
                )
              })}
            </tr>
          </table>
        </>
      )}
      <Break />
      {returns && (
        <>
          <H3>{t('返回值')}</H3>
        </>
      )}
    </>
  )
}
