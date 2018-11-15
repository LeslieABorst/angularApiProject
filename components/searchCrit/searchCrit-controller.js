"use strict";
{
    angular.module('app')
        .controller('SearchCritController', function(MyService) {
            const $ctrl = this;
            $ctrl.movies = MyService.movieList;
            $ctrl.genres = MyService.genreList;
            $ctrl.ratings = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        
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
                    $ctrl.genres = resolve;
                    console.log($ctrl.genres);
                }).catch(function() {

                });
            }

            $ctrl.filterList = function(id)  {
                if(!$ctrl.selectedGenres.length) {
                console.log(id, $ctrl.selectedGenres);
                $ctrl.movies = [...MyService.movieList];
                } else {
                    $ctrl.movies = [...MyService.movieList].filter(movie => {
                        return movie.genre_ids.some(id => $ctrl.selectedGenres.includes(id.toString()));
                    });
                }
            }

            $ctrl.getRatings = function(){
                    console.log($ctrl.movies)
                    $ctrl.movies = [...$ctrl.movies].filter(movie => movie.vote_average <= $ctrl.selectedRating)
            }
            

        });
}