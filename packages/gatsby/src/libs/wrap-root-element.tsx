import React from "react";

import { ApolloProvider, client } from "./apollo/wrap-root-element";
import { AuthProvider, defaultAuth } from "./auth/context";

interface Props {
  element: any;
}

const wrapRootElement: React.FC<Props> = ({ element }) => (
  <ApolloProvider client={client}>
    <AuthProvider value={defaultAuth}>{element}</AuthProvider>
  </ApolloProvider>
);

export { wrapRootElement };
