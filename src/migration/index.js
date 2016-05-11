/**
 * Migration manager.
 */
'use strict';

import * as inquirer from 'inquirer';
import * as colors from 'colors';

export default class Migration {
  constructor (sourceType, config) {
    this.sourceType = sourceType;

    this.migration = require(`./${sourceType}`);
    this.answers = false;
    this.config = config;
  }

  /**
   * Start the wizard, ask for questions and prepare connections.
   * @return {Promise}
   */
  wizard () {
    return new Promise((resolve, reject) => {
      inquirer.prompt(this.migration.questions, (answers) => {
        this.answers = answers;
        return resolve(this.answers);
      });
    });
  }

  /**
   * Start the migration process, only run after wizard has been completed.
   */
  migrate () {
    if (! this.answers) return Promise.reject(new Error('Wizard not called!'));

    return new Promise((resolve, reject) => {
      let migrator = new this.migration.Migrator(this.answers, this.config);

      console.log(`Validating...`.yellow);
      migrator.validate().then(() => {
        console.log(`Migrating...`.yellow);
        return migrator.execute();
      }).then(() => {
        return resolve();
      }).catch((err) => {
        return reject(err);
      })
    });
  }
}
