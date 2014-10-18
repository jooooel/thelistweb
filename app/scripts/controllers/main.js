'use strict';

/**
 * @ngdoc function
 * @name thelistwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thelistwebApp
 */
angular.module('thelistwebApp')
    .controller('MainCtrl', ['$scope', 'userService', 'listService', function ($scope, userService, listService) {
        $scope.user = userService.getUser();

        $scope.lists = listService.getLists();
    }]);
