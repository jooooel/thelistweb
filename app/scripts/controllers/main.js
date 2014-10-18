'use strict';

/**
 * @ngdoc function
 * @name thelistwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thelistwebApp
 */
angular.module('thelistwebApp')
    .controller('MainCtrl', ['$scope', 'userService', function ($scope, userService) {
        $scope.user = userService.getUser();
    }]);
