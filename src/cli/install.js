
'use strict';

import program from 'commander';

import Installation from './../installation';

program
  .option('-d, --directory', 'Give ManiaJS installation directory (not the current working dir)')
  .option('-f, --force', 'Force installation of package')
  .parse(process.argv);

let packages = program.args;

if (! packages.length) {
  console.error('No packages to install!');
  process.exit(1);
}

let directory = program.directory || process.cwd();
let installation = new Installation(directory);

