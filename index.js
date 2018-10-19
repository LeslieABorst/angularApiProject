"use strict";
{
    angular.module('app', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<search-crit></search-crit>'
                })
                .when('/movieList', {
                    template: '<movie-list></movie-list>'
                })
                .when('/watchList', {
                    template: '<watch-list></watch-list>'
                })
                .otherwise({
                    template: '<h1>404 page does not exist</h1>'
                })
        });
}