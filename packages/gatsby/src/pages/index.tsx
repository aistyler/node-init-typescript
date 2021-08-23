import React, { useContext } from "react";
import { graphql, PageProps } from "gatsby";
import { gql, useQuery } from "@apollo/client";

import { AuthContext } from "@/libs/auth/context";
import View from "@/page-views/index";

interface Props extends PageProps<Gql.IndexPageQuery> {}

const Index: React.FC<Props> = ({ data, location }) => {
  const { loading, error, data: data2 } = useQuery<Gql.GetHomepageQuery>(dataQuery);
  const { landingPage } = data2 || {};
  const { user } = useContext(AuthContext);

  return (
    <View
      location={location}
      loading={loading}
      error={error}
      data={landingPage}
      user={user() || undefined}
    />
  );
};

export default Index;

const dataQuery = gql`
  query GetHomepage {
    landingPage {
      title
      slug
      description
    }
  }
`;

export const staticQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
