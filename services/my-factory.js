"use strict";
{
    angular.module('app')
        .factory('MyFactory', function() {
            return {
                testProperty: 'this is another test'
            }
        });
}