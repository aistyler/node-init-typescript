import { createContext } from "react";

import StrapiApi from "./strapi-api";

export const api = new StrapiApi(
  process.env.GATSBY_API_URL || "",
  process.env.GATSBY_GQL_URL || ""
);
api.init();

export const defaultAuth = {
  isAuthenticated: (): boolean => api.getUser() !== null,
  user: api.getUser.bind(api),
  logout: api.logout.bind(api),
  login: api.login.bind(api),
};

export const AuthContext = createContext(defaultAuth);
AuthContext.displayName = "AuthContext";

export const AuthProvider = AuthContext.Provider;

export const AuthConsumer = AuthContext.Consumer;
