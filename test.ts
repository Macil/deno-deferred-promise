import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";
import { DeferredPromise } from "./mod.ts";

Deno.test("resolve", async () => {
  const d = new DeferredPromise();
  d.resolve(123);
  assertEquals(await d.promise, 123);
});

Deno.test("reject", async () => {
  const d = new DeferredPromise();
  d.reject(456);
  let e;
  try {
    await d.promise;
  } catch (err) {
    e = err;
  }
  assertEquals(e, 456);
});
