//

import { $ } from "bun";

//

await Promise.all([
  $`bun x prettier --write .`,
  $`bun x sort-package-json "**/package.json" "!**/node_modules`,
]);

//
