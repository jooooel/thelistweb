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
        'ui.router',
        'ngSanitize',
        'ngTouch'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise("/");

        // Now set up the states
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "views/main.html",
                controller: 'MainCtrl'
            })
            .state('about', {
                url: "/about",
                templateUrl: "views/about.html",
                controller: 'AboutCtrl'
            });
    }])
    .controller('AppController', ['$scope', 'userService', function ($scope, userService) {
        $scope.isSignedIn = function () {
            return userService.isAuthenticated();
        }

        $scope.signOut = function () {
            userService.signOut();
        }
    }]);
