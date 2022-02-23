# deferred_promise

[Don't use this unless you know what you're doing.](https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-deferred-anti-pattern)
Prefer the `Promise` constructor.

Rough port of [p-defer](https://github.com/sindresorhus/p-defer) for
[Deno](https://deno.land/).

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
