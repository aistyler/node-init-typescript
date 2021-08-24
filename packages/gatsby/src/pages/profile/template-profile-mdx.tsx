import React from "react";
import { graphql, PageProps } from "gatsby";

import View from "~/page-views/profile-mdx";

interface Props extends PageProps {
  data: Gql.ProfileMdxPageQuery;
  pageContext: {
    slugFilter: string;
  };
}

const ProfileMdx: React.FC<Props> = ({ location, data, pageContext }) => {
  const profileImageSharp = data.file?.childImageSharp?.gatsbyImageData;
  const { mdx } = data;

  return <View location={location} profileImageSharp={profileImageSharp} mdx={mdx} />;
};

export default ProfileMdx;

export const pageQuery = graphql`
  query ProfileMdxPage($locale: String!, $slugFilter: String!) {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    mdx(fields: { locale: { eq: $locale } }, slug: { glob: $slugFilter }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
