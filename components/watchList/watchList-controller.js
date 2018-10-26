"use strict"; 
{
    angular.module('app')
        .controller('WatchListController', function (MyService) {
            const $ctrl = this;

            $ctrl.watchList = MyService.watchList;

        
            $ctrl.deleteMovie = function(index) {
                $ctrl.watchList.splice(index, 1);
            };
        });
}