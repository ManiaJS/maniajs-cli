
'use strict';

import program from 'commander';
import * as colors from 'colors';
import * as path from 'path';
import * as fs from 'fs-extra';

import Installation from './../installation';
import Migration from './../migration/';

import * as inquirer from 'inquirer';

program
  .parse(process.argv);

let folder = path.resolve(program.args.length ? program.args[0] : process.cwd() + '/');
let installation = new Installation(folder);

// Start migration wizard. Select source type.
var questions = [
  {
    type: 'list',
    name: 'sourceType',
    message: 'Please select the source type',
    default: 'xaseco2',
    choices: ['xaseco2']
  }
];

inquirer.prompt(questions).then((answers) => {
  let manager = new Migration(answers.sourceType);

  manager.wizard().then(() => {
    return manager.migrate();
  }).then(() => {
    console.log(`Migration done!`.green);
  }).catch((err) => {
    console.log(`${err}`.red, err.stack);
    process.exit(1);
  });
});
