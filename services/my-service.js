"use strict";
{
    angular.module('app')
        .service('MyService', function(){
        const service = this;
        service.testProperty = "This is a test.";
    });
}