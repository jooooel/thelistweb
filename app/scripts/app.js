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
        $urlRouterProvider.otherwise('/');

        // Now set up the states
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('signin', {
                url: '/signin',
                templateUrl: 'views/signin.html',
                controller: 'SigninCtrl'
            })
            .state('list', {
                url: '/list/:listid',
                templateUrl: 'views/list.html',
                controller: 'ListCtrl'
            });
    }])
    .run(['$rootScope', '$state', 'userService', function ($rootScope, $state, userService) {
        $rootScope.$on('$stateChangeStart', function (event, next) {
            if (next.name != 'signin' && !userService.isAuthenticated()) {
                // Redirect back to sign in
                event.preventDefault();
                $state.go('signin');
            }
            else if (next.name == 'signin' && userService.isAuthenticated()) {
                // Don't let the user go to sign in if signed in
                event.preventDefault();
                $state.go('main');
            }
        });
    }]);
