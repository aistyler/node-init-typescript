import { CACHE_KEY_PREFIX, ICache, KeyManifestEntry, MaybePromise } from "./shared";

export class CacheKeyManifest {
  private readonly manifestKey: string;

  constructor(private cache: ICache, private clientId: string) {
    this.manifestKey = CacheKeyManifest.createManifestKeyFrom(clientId);
  }

  async add(key: string): Promise<void> {
    const keys = new Set((await this.cache.get<KeyManifestEntry>(this.manifestKey))?.keys || []);

    keys.add(key);

    await this.cache.set<KeyManifestEntry>(this.manifestKey, {
      keys: [...keys],
    });
  }

  async remove(key: string): Promise<void> {
    const entry = await this.cache.get<KeyManifestEntry>(this.manifestKey);

    if (!entry) return;

    const keys = new Set(entry.keys);
    keys.delete(key);

    if (keys.size > 0) {
      // eslint-disable-next-line consistent-return
      return this.cache.set(this.manifestKey, { keys: [...keys] });
    }

    // eslint-disable-next-line consistent-return
    return this.cache.remove(this.manifestKey);
  }

  get(): MaybePromise<KeyManifestEntry | undefined> {
    return this.cache.get<KeyManifestEntry>(this.manifestKey);
  }

  clear(): MaybePromise<void> {
    return this.cache.remove(this.manifestKey);
  }

  private static createManifestKeyFrom(clientId: string): string {
    return `${CACHE_KEY_PREFIX}::${clientId}`;
  }
}
