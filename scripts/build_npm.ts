// npm publishing instructions:
//  deno run -A scripts/build_npm.ts [VERSION]
//  cd npm && npm publish
import { build, emptyDir } from "https://deno.land/x/dnt@0.23.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: "dev",
  },
  package: {
    // package.json properties
    name: "@macil/deferred-promise",
    version: Deno.args[0],
    description:
      "Library to create an object with a promise and the ability to fulfill it ",
    license: "MIT",
    sideEffects: false,
    repository: {
      type: "git",
      url: "git+https://github.com/Macil/deno-deferred-promise.git",
    },
    bugs: {
      url: "https://github.com/Macil/deno-deferred-promise/issues",
    },
  },
});

await Deno.copyFile("LICENSE.md", "npm/LICENSE.md");
await Deno.copyFile("README.md", "npm/README.md");
