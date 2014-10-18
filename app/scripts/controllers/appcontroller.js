'use strict';

/**
 * @ngdoc function
 * @name thelistwebApp.controller:AppController
 * @description
 * # AppController
 * Controller of the thelistwebApp
 */
angular.module('thelistwebApp')
    .controller('AppController', ['$scope', 'userService', function ($scope, userService) {
        $scope.isSignedIn = function () {
            return userService.isAuthenticated();
        }

        $scope.signOut = function () {
            userService.signOut();
        }
    }]);