import React from "react";

import View from "@/component-views/Footer";

interface Props {
  location: Location;
  siteMetadata?: SiteMetadata;
}

const Footer: React.FC<Props> = ({ location, siteMetadata = {} }) => {
  return <View location={location} siteMetadata={siteMetadata} />;
};

export { Footer };
