import React from "react"

import { LocaleContext } from "./context"
import { SEO } from "./components/seo"

const wrapPageElement = ({ element, props : {location, pageContext} }) => {
  return (
    <LocaleContext.Provider value={pageContext.locale}>
      <SEO location={location} pageContext={pageContext} />
      {element}
    </LocaleContext.Provider>
  );
}

export { wrapPageElement }
