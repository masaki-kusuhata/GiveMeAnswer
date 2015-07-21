(function () {
  'use strict';

  describe('Service: ConstService', function () {

    var ConstService, $rootScope;

    beforeEach(module('GiveMeAnswer.service.const'));

    beforeEach(inject(function (_$rootScope_, _ConstService_) {
      ConstService = _ConstService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing',function(){
      it('someThing',function(){

      });
    });
  });
})();