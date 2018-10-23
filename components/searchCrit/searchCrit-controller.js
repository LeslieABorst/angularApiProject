"use strict";
{
    angular.module('app')
        .controller('SearchCritController', function(MyService) {
            const $ctrl = this;
            $ctrl.movies = MyService.movieList;
            $ctrl.genre = MyService.genreList;
            

            $ctrl.onInputChange = function(){
                MyService.getData($ctrl.searchMovie).then(function(data){
                    $ctrl.movies = data;
                }).catch(function(err){
                    //error
                })
            }

        });
}