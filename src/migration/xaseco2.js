/**
 * Xaseco2 Database Migration
 */
'use strict';

import BaseMigrator from "./base";


export var questions = [
  {
    type: 'input',
    name: 'sourceHost',
    default: 'localhost',
    message: 'Source MySQL Host',
    validate(input) {return input.length > 1 ? true : 'Should be valid hostname or IP address!';}
  },
  {
    type: 'input',
    name: 'sourcePort',
    default: '3306',
    message: 'Source MySQL Port',
    filter(input) {return parseInt(input);},
    validate(input) {return isNaN(parseInt(input)) || parseInt(input) < 1024 ? 'Should be a valid numeric port number and above 1024!' : true;}
  },
  {
    type: 'input',
    name: 'sourceUser',
    default: 'root',
    message: 'Source MySQL user',
    validate(input) {return input.length > 1 ? true : 'Should be a valid username';}
  },
  {
    type: 'password',
    name: 'sourcePassword',
    default: '',
    message: 'Source MySQL password'
  },
  {
    type: 'input',
    name: 'sourceDatabase',
    default: 'xaseco2',
    message: 'Source Database Name'
  },
  {
    type: 'confirm',
    name: 'confirm',
    default: true,
    message: 'Do you want to continue and overwrite ALL OF THE DESTINATION CONTENTS???',
    validate(input) {
      if (input !== true) process.exit();
    }
  }
];


export class Migrator extends BaseMigrator {
  constructor (answers, config) {
    super(config, {
      source: {
        type: 'mysql',
        host: answers.sourceHost,
        port: answers.sourcePort,
        user: answers.sourceUser,
        password: answers.sourcePassword,
        database: answers.sourceDatabase
      }
    });
  }

  validate () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 400);
    });
  }

  execute () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 900);
    });
  }
}
