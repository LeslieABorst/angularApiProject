"use strict";
{
    angular.module('app')
        .controller('SearchCritController', function(MyService, MyFactory) {
            const $ctrl = this;
            $ctrl.text = MyService.testProperty;
            $ctrl.factoryText = MyFactory.testProperty;
        });
}