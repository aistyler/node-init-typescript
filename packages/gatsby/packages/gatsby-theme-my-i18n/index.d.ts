import * as React from "react";
import { GatsbyLinkProps } from "gatsby";

export const LocaleContext: React.Context<string>;
//export const LocaleContext: React.Context<string>;

export const LocaleProvider: React.FC<{
  children: any;
  location: Location;
  pageContext: {
    locale?: string;
  };
}>;

export const MdxLink: React.FC<{
  [x: string]: any;
  href: any;
  children: any;
}>;

export interface LocalizedLinkProps extends GatsbyLinkProps<unknown> {
  language?: string;
}
export const LocalizedLink: React.FC<LocalizedLinkProps>;

export const LocalizedRouter: React.FC<{
  [x: string]: any;
  basePath: any;
  children: any;
}>;

export const LocalesList: React.FC;

export function localizedPath({
  defaultLang,
  prefixDefault,
  locale,
  path,
}: {
  defaultLang: any;
  prefixDefault: any;
  locale: any;
  path: any;
}): string;

export function useLocalization(): {
  locale: string;
  defaultLang: any;
  prefixDefault: any;
  config: any;
  localizedPath: typeof localizedPath;
};

export const SEO: React.FC<{
  location: Location;
  pageContext: {
    locale?: string;
  };
}>;