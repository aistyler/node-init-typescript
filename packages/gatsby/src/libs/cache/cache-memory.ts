import { Cacheable, ICache, MaybePromise } from "./shared";

export class InMemoryCache {
  public enclosedCache: ICache = (() => {
    const cache: Record<string, unknown> = {};

    return {
      set<T = Cacheable>(key: string, entry: T): MaybePromise<void> {
        cache[key] = entry;
      },

      get<T = Cacheable>(key: string): MaybePromise<T | undefined> {
        const cacheEntry = cache[key] as T;

        if (!cacheEntry) {
          return;
        }

        // eslint-disable-next-line consistent-return
        return cacheEntry;
      },

      remove(key: string) {
        delete cache[key];
      },

      allKeys(): string[] {
        return Object.keys(cache);
      },
    };
  })();
}
