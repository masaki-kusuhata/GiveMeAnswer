(function(){
  'use strict';

  describe('Controller: AnswerController', function () {

    beforeEach(module('GiveMeAnswer.components.answer'));

    var AnswerController;

    beforeEach(inject(function ($controller) {
      AnswerController = $controller('AnswerController');
    }));

    describe('AnswerController',function(){
      it('Test Case', function () {
        AnswerController.activate();
      });
    });
  });
})();