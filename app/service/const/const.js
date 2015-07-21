/**
 * Const Service module.
 *
 * @module GiveMeAnswer.service.const
 */
(function() {
  'use strict';

  angular
    .module('GiveMeAnswer.service.const', [])
    .constant('ConstService', ConstService);

  ConstService.$inject = [];

  /**
   * ConstService
   *
   * @class ConstService
   * @constructor
   */
  function ConstService() {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var someProperty = {};

    var constService = {
      
    };

    return constService;
  }

})();
