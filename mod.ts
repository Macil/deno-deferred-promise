export class DeferredPromise<T> {
  /**
  The deferred promise.
	*/
  promise: Promise<T>;

  /**
	Resolves the promise with a value or the result of another promise.
	@param value - The value to resolve the promise with.
	*/
  resolve: (value: T | PromiseLike<T>) => void;

  /**
	Reject the promise with a provided reason or error.
	@param reason - The reason or error to reject the promise with.
	*/
  reject: (reason?: unknown) => void;

  /**
  Create a deferred promise.
  @example
  ```
  import { DeferredPromise } from 'https://deno.land/x/deferred_promise@v1.0.0/mod.ts';
  function delay(milliseconds: number) {
    const deferred = new DeferredPromise<string>();
    setTimeout(() => {
      deferred.resolve("🦄");
    }, milliseconds);
    return deferred.promise;
  }
  console.log(await delay(100));
  //=> '🦄'
  ```
  */
  constructor() {
    let resolve: undefined | (typeof this.resolve) = undefined;
    let reject: undefined | (typeof this.reject) = undefined;
    this.promise = new Promise<T>((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    });
    this.resolve = resolve!;
    this.reject = reject!;
  }
}
