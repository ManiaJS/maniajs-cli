
'use strict';

import program from 'commander';
import * as colors from 'colors';

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

let packageInfos = [];
let packageInstall = [];

// Fetch recent package from register.
packages.reduce((promise, name) => {
  return promise.then(() => {
    return installation.onlinePackage(name);
  }).then((pkg) => {
    packageInfos.push(pkg);
    packageInstall.push({name: name, version: pkg.version});
  }).catch(() => {
    console.log(`Error during online package check, '${name}' doesn't exists?`.red);
    process.exit(1);
  });
}, Promise.resolve()).then(() => {
  // Install recent versions (strict versions!)
  console.log('Installing packages...'.yellow);
  installation.install(packageInstall).then(() => {
    console.log('Installation done, make sure you enable the plugin in the config file!'.green +
      ' (and read the readme for additional steps!)'.yellow);
    process.exit();
  }).catch((err) => {
    console.log('Error with installing package:'.red);
    console.log(err);
    console.log(err.stack);
    process.exit(1);
  });
});
