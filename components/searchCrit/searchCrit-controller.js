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
                    // console.log($ctrl.movies);
                }).catch(function(err){
                    //error
                })
            }
            
            $ctrl.genres = function() {
                MyService.getGenre().then(function(resolve){
                    $ctrl.genre = resolve;
                    console.log($ctrl.genre);
                }).catch(function() {

                });
            }

            
        });
}