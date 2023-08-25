import React from "react"
// TODO: enable these deps after i18n is set up
// import { useTranslation } from "gatsby-plugin-react-i18next"
// import { TOptions } from "i18next"
// import htmr from "htmr"

import Link from "./Link"

interface Props {
  id: string
  options?: any // TODO: change to TOptions later
}

// Custom components mapping to be used by `htmr` when parsing the translation
// text
const transform = {
  a: Link,
}

// Renders the translation string for the given translation key `id`. It
// fallback to English if it doesn't find the given key in the current language
const Translation = ({ id, options }: Props) => {
  // const { t } = useTranslation()

  // const translatedText = t(id, options)

  // Use `htmr` to parse html content in the translation text
  // @ts-ignore
  // return <>{htmr(translatedText, { transform })}</> TODO: add this return later
  return null
}

export default Translation
