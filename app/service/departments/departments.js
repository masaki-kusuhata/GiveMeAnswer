/**
 * Departments Service module.
 *
 * @module GiveMeAnswer.service.departments
 */
(function() {
  'use strict';

  angular
    .module('GiveMeAnswer.service.departments', [])
    .factory('DepartmentsService', DepartmentsService);

  DepartmentsService.$inject = [];

  /**
   * DepartmentsService
   *
   * @class DepartmentsService
   * @constructor
   */
  function DepartmentsService() {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var someProperty = {};

    var departmentsService = {
      getDepartments: function() {
        //TODO １時的に固定値を返しておく
        return ['モバイルソリューション部', '生産ソリューション部'];
      }
    };

    return departmentsService;
  }

})();
