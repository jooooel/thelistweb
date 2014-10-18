'use strict';

/**
 * @ngdoc function
 * @name thelistwebApp.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the thelistwebApp
 */
angular.module('thelistwebApp')
    .controller('SigninCtrl', ['$scope', 'userService', function ($scope, userService) {
        $scope.submit = function () {
            userService.authenticate($scope.username, $scope.password);
        }
    }]);
