//
// IAuth.d.ts
//

type Maybe<T> = T | null | undefined;
type MaybePromise<T> = Promise<T> | T;

interface IAuth<U, W> {
  user: U | null;

  login<T>(identifier: string, password: string): Promise<W<T>>;
  logout(identifier?: string): MaybePromise<void>;
  getAccessToken(identifier?: string): Promise<string | undefined>;
  getUser(identifier?: string): U | null;
}
