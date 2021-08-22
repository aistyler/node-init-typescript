/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import { navigate } from "@reach/router";

import { LocalizedLink, LocalizedLinkProps as LLinkProps } from "gatsby-theme-my-i18n";

const USE_LOCALIZED_LINK = !!process.env.GATSBY_LOCALES;

interface NormalLinkProps extends GatsbyLinkProps<unknown> {
  localized?: false;
}

interface LocalizedLinkProps extends LLinkProps {
  localized?: true;
}

interface HashLinkProps {
  to: string;
}

const HashLink: React.FC<HashLinkProps> = ({ to, children, ...rest }) => {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // console.log(">>>>> HASHLINK:", e.currentTarget.hash);
    navigate(e.currentTarget.hash);
  };
  return (
    <a href={to} onClick={onClick} {...rest}>
      {children}
    </a>
  );
};

const isHash = (to: string): boolean => {
  return !!to && to[0] === "#";
};

const Link: React.FC<LocalizedLinkProps | NormalLinkProps> = (args) => {
  const { localized = USE_LOCALIZED_LINK, children, to, ...rest } = args;

  if (isHash(to)) {
    return (
      <HashLink to={to} {...rest}>
        {children}
      </HashLink>
    );
  }
  if (localized) {
    return (
      <LocalizedLink to={to} {...rest}>
        {children}
      </LocalizedLink>
    );
  }
  // gatsby link
  return (
    <GatsbyLink to={to} {...rest}>
      {children}
    </GatsbyLink>
  );
};

export { Link };
