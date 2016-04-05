
'use strict';

import program from 'commander';
import * as colors from 'colors';

import Installation from './../installation';

program
  .parse(process.argv);

let directory = program.directory || process.cwd();
let installation = new Installation(directory);

console.log('Installed packages:'.green);
Object.keys(installation.pkg.dependencies).forEach((name) => {
  let versionRequired = installation.pkg.dependencies[name];
  console.log(`${name}`.bold.yellow + `: `.red + `${versionRequired}`.yellow);
});
