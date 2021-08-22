import * as React from "react"
import { Router } from "@reach/router"
import { useLocalization } from "../hooks/use-localization"
import { LocaleContext } from "../context";

export const LocalizedRouter = ({ basePath, children, ...props }) => {
  const locale = React.useContext(LocaleContext)
  const {
    localizedPath,
    defaultLang,
    prefixDefault,
  } = useLocalization()
  const path = localizedPath({
    defaultLang,
    prefixDefault,
    locale,
    path: basePath,
  })

  return (
    <Router basepath={path} {...props}>
      {children}
    </Router>
  )
}
