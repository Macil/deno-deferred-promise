# deferred_promise

This library exports the `DeferredPromise` class which has the properties
`promise`, `resolve(value)`, and `reject(reason)`. This is meant to be used to
when you need to create an object that encapsulates a promise with the ability
to fulfill it. The exposed promise is a normal promise object that can be passed
around separately from the capability to fulfill it.

[Don't use this unless you know what you're doing.](https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-deferred-anti-pattern)
The standard `Promise` constructor is usually superior because it limits the
visibility of the `resolve` and `reject` capabilities in a closure. This is
inconvenient in some situations.

Originally based on [p-defer](https://github.com/sindresorhus/p-defer).

## Usage

```typescript
import { DeferredPromise } from "https://deno.land/x/deferred_promise@v1.0.0/mod.ts";
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

_The above is just an example. Use
[std/async's `delay`](https://deno.land/std@0.126.0/async/delay.ts) if you need
to delay a promise._
