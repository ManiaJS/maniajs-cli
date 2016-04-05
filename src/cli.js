/**
 * ManiaJS Cli Tool.
 */
import {Command} from 'commander';

import * as packageInfo from './../package';

let program = new Command()
  .version(packageInfo.version)
  .command('init [folder]', 'Init ManiaJS environment in current folder or provided folder')
  .command('install [name]', 'Install ManiaJS plugin in current folder')
  .command('uninstall [name]', 'Uninstall ManiaJS plugin in current folder')
  .command('update', 'Update ManiaJS Core and Plugins to next minor version')
  .command('upgrade', 'Upgrade ManiaJS Core and Plugins to next big update (can break things)')
  .command('list', 'List current ManiaJS Core and Plugins entries')
  .command('start', 'Start server in current directory')
  .command('stop', 'Stop server in current directory')
  .command('restart', 'Restart server in current directory')
  .parse(process.argv);
