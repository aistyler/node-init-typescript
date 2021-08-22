import React from "react";

import View from "@/component-views/Header";

interface Props extends React.HTMLProps<HTMLDivElement> {
  siteTitle?: string;
}

const Header: React.FC<Props> = ({ siteTitle = "", ...rest }) => {
  return <View siteTitle={siteTitle} {...rest} />;
};

export { Header };
