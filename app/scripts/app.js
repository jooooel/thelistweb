'use strict';

/**
 * @ngdoc overview
 * @name thelistwebApp
 * @description
 * # thelistwebApp
 *
 * Main module of the application.
 */
angular
    .module('thelistwebApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('AppController', ['$scope', 'userService', function ($scope, userService) {
        $scope.isSignedIn = function () {
            return userService.isAuthenticated();
        }

        $scope.signOut = function () {
            userService.signOut();
        }
    }]);
