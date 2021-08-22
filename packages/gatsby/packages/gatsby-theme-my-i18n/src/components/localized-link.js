import * as React from "react"
import { Link } from "gatsby"
import { localizedPath } from "../helpers"
import { useLocalization } from "../hooks/use-localization"
import { LocaleContext } from "../context";

export const LocalizedLink = ({ to, language, ...props }) => {
  const locale = React.useContext(LocaleContext)
  const { defaultLang, prefixDefault } = useLocalization()
  const linkLocale = language || locale

  return (
    <Link
      {...props}
      to={localizedPath({
        defaultLang,
        prefixDefault,
        locale: linkLocale,
        path: to,
      })}
    />
  )
}
