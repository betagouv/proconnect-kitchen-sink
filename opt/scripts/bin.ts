#!/usr/bin/env bun

import { $ } from "bun";
import chalk from "chalk";
import { relative } from "node:path";
import { parseArgs } from "util";

//

const {
  positionals: [, , args],
} = parseArgs({
  args: Bun.argv,
  strict: true,
  allowPositionals: true,
});

console.log(chalk.gray(`$ cd ${relative(process.cwd(), import.meta.dir)}`));
console.log(chalk.gray(`$ bun ${args}`));
await $`bun ${args}`.cwd(import.meta.dir);
