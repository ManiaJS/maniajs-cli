/**
 * Bootstrap File, Will only call the core in the node_modules!
 *
 * For more information visit the github of ManiaJS:
 * @link https://github.com/ManiaJS/ManiaJS
 */
process.env.CONFIG_LOCATION = __dirname + '/config.yaml';
try {
  let ManiaJS = require('maniajs'); // Will start ManiaJS.
  if (ManiaJS.hasOwnProperty('Start')) ManiaJS.Start();
} catch (err) {
  console.log('Please execute \'npm install\' to install all the dependencies, or with the CLI tool: \'maniajs update\'!');
  process.exit(1);
}
