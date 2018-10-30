"use strict";
{
    angular.module('app')
        .controller('MovieListController', function(MyService) {
            const $ctrl = this;
            $ctrl.desc = true;

            $ctrl.addMovie = function(movie) {
                MyService.watchList.push(movie);
                $ctrl.newMovie = true;
            };

            $ctrl.showDesc = function() {
              $ctrl.desc = !$ctrl.desc;
            };
        });
}