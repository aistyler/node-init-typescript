import { ICache, Cacheable, CACHE_KEY_PREFIX, MaybePromise } from "./shared";

export class LocalStorageCache {
  public enclosedCache: ICache = (() => {
    return {
      set<T = Cacheable>(key: string, entry: T): MaybePromise<void> {
        localStorage.setItem(key, JSON.stringify(entry));
      },

      get<T = Cacheable>(key: string): MaybePromise<T | undefined> {
        const json = localStorage.getItem(key);

        if (!json) return;

        try {
          const payload = JSON.parse(json) as T;
          // eslint-disable-next-line consistent-return
          return payload;
        } catch (e) {
          // eslint-disable-next-line no-useless-return
          return;
        }
      },

      remove(key: string) {
        localStorage.removeItem(key);
      },

      allKeys(): string[] {
        return Object.keys(localStorage).filter((key) => key.startsWith(CACHE_KEY_PREFIX));
      },
    };
  })();
}
