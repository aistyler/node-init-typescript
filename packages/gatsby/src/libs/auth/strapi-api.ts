//
// strapi API
//
import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

import { CacheKey, CacheManager, InMemoryCache, CacheEntry } from "../cache";

const client_id = "carbon-web";

class StrapiApi implements IAuth<Gql.UsersPermissionsMe, AxiosResponse> {
  _req: AxiosInstance;

  user: Gql.UsersPermissionsMe | null;

  gqlPath: string;

  cache: CacheManager;

  constructor(baseURL: string, gqlPath: string) {
    this._req = axios.create({
      baseURL,
      timeout: 5000,
    });
    this.user = null;
    this.gqlPath = gqlPath;
    this.cache = new CacheManager(new InMemoryCache().enclosedCache, client_id);
  }

  async init(): Promise<void> {
    const data = {
      client_id,
      scope: "",
      audience: "",
    };
    const entry: Partial<CacheEntry> | undefined = await this.cache.get(new CacheKey(data));
    if (entry) {
      this._setAuth(entry as CacheEntry);
    }
  }

  _setAuth(cacheEntry: CacheEntry | null): void {
    if (cacheEntry) {
      this.user = cacheEntry.decodedToken.user;
      this._req.defaults.headers.common.Authorization = `Bearer ${cacheEntry.access_token}`;
    } else {
      this.user = null;
      this._req.defaults.headers.common.Authorization = "";
    }
    //console.log(">>>>>>>>user:", this.user, cacheEntry?.expires_in);
  }

  _saveAuth(authBody: Gql.UsersPermissionsLoginPayload | null): void {
    if (authBody) {
      const data = {
        client_id,
        scope: "",
        audience: "",
        decodedToken: { user: authBody.user, claims: authBody.jwt },
        access_token: authBody.jwt,
        id_token: authBody.jwt,
        expires_in: authBody.expires_in || 60, // 60 seconds
      };
      this.cache.set(data as CacheEntry);
      this._setAuth(data as CacheEntry);
    } else {
      this.cache.clear();
      this._setAuth(null);
    }
  }

  // login
  async login<T extends Gql.UsersPermissionsLoginPayload>(
    email: string,
    password: string
  ): Promise<AxiosResponse<T>> {
    try {
      const res = await this._req.request<any, AxiosResponse<T>>({
        method: "post",
        url: `/auth/local`,
        headers: { "Content-Type": "application/json" },
        data: {
          identifier: email,
          password,
        },
      });
      this._saveAuth(res.data);
      return res;
    } catch (e) {
      return e;
    }
  }

  // logout
  logout(): MaybePromise<void> {
    this._saveAuth(null);
  }

  // get user
  getUser(): Gql.UsersPermissionsMe | null {
    return this.user;
  }

  // get access token
  async getAccessToken(): Promise<string | undefined> {
    const data = {
      client_id,
      scope: "",
      audience: "",
    };
    const entry: Partial<CacheEntry> | undefined = await this.cache.get(new CacheKey(data));
    return entry ? entry.access_token : undefined;
  }

  // register
  async register(email: string, password: string, username: string): Promise<AxiosResponse> {
    try {
      const res = await this._req.request<any, AxiosResponse<Gql.UsersPermissionsLoginPayload>>({
        method: "post",
        url: `/auth/local/register`,
        headers: { "Content-Type": "application/json" },
        data: {
          email,
          password,
          username,
        },
      });
      this._saveAuth(res.data);
      return res;
    } catch (e) {
      return e;
    }
  }

  async request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    try {
      return await this._req(config);
    } catch (e) {
      return e;
    }
  }

  async graphql(query: string, variables = undefined): Promise<AxiosResponse> {
    try {
      const res = await this._req.request<any, AxiosResponse<Gql.UsersPermissionsLoginPayload>>({
        method: "post",
        url: this.gqlPath,
        headers: { "Content-Type": "application/json" },
        data: {
          query,
          variables,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  }
}

export default StrapiApi;
