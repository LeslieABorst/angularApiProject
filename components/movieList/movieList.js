"use strict";
{
    angular.module('app') 
        .component('movieList', {
            controller: 'MovieListController',
            templateUrl: 'components/movieList/movieList.html',
            bindings: {movies: "<"}
        });
}