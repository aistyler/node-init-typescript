import { createContext } from "react";

const defaultLocale = "en";

const LocaleContext = createContext(defaultLocale);
LocaleContext.displayName = "LocaleContext";

const LocaleProvider = LocaleContext.Provider;

export { LocaleContext, LocaleProvider };
