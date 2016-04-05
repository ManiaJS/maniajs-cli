
'use strict';

import program from 'commander';
import * as colors from 'colors';

import Installation from './../installation';

program
  .parse(process.argv);

let directory = program.directory || process.cwd();
let installation = new Installation(directory);

console.log(`Updating installation...`.yellow);

installation.update().then(()=> {
  console.log(`Update completed!`.green);
  process.exit();
}).catch((err) => {
  console.error('Error when updating! See error bellow:'.red);
  console.error(err);
  console.error(err.stack);
  process.exit(1);
});
