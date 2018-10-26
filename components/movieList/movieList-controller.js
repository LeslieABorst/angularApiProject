"use strict";
{
    angular.module('app')
        .controller('MovieListController', function(MyService) {
            const $ctrl = this;



            $ctrl.addMovie = function(movie) {
                MyService.watchList.push(movie);
                $ctrl.newMovie = true;
            };
        });
}