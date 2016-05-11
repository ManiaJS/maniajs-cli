'use strict';

/**
 * Base Migrator
 * @type {BaseMigrator}
 * @class BaseMigrator
 */
export default class BaseMigrator {
  constructor (config, options) {
    this.db = null;
    this.config = config;
    this.options = options;
  }
}
