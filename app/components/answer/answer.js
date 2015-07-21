/**
 * Answer Components module.
 *
 * @module GiveMeAnswer.components.answer
 */
(function() {
  'use strict';

  angular
    .module('GiveMeAnswer.components.answer', [
      'GiveMeAnswer.service.departments'
    ])
    .controller('AnswerController', AnswerController);

  AnswerController.$inject = ['DepartmentsService'];

  /**
   * AnswerController
   *
   * @class AnswerController
   * @constructor
   */
  function AnswerController(DepartmentsService) {
    console.log('AnswerController Constructor');
    this.departments = ['test', 'test1'];

  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  AnswerController.prototype.activate = function() {
    console.log('AnswerController activate Method');

    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
