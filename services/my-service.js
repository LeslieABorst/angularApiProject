"use strict";
{
    angular.module('app')
        .service('MyService', function($http){
        const service = this;

        service.movieList = [];
        service.genreList = [];
          
        service.getData = function(query) {
        
            const url = "https://api.themoviedb.org/3/search/movie?include_adult=false&query="+query+"&language=en-US&api_key=4c7aca0b1e535586399a350d383ae387";

            return $http.get(url).then(function (response) {
                if(!response)
                    Promise.reject('failed');
                else {
                    service.movieList = response.data.results;
                    return service.movieList;
                }
            });
        }

        $http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=4c7aca0b1e535586399a350d383ae387&language=en-US')
            .then(function(response) {
                service.genreList = response.data.results;
                return service.genreList;
                console.log(service.genreList);
            });
            
        

    });
}