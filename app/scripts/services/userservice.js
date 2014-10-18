'use strict';

/**
 * @ngdoc service
 * @name thelistwebApp.userService
 * @description
 * # userService
 * Factory in the thelistwebApp.
 */
angular.module('thelistwebApp')
    .factory('userService', ['$cookieStore', '$state', 'restService', function ($cookieStore, $state, restService) {
        var saveUser = function (user) {
            restService.setHeaders(user);
            $cookieStore.put('user', user);
        };

        var getUser = function () {
            return $cookieStore.get('user');
        };

        var loadUser = function () {
            var user = getUser();
            if (user) {
                restService.setHeaders(user);
            }
        };

        var resetUser = function () {
            restService.resetHeaders();
            $cookieStore.remove('user');
        };

        var signOut = function () {
            resetUser();
            $state.go('signin');
        };

        // Load user from cookie
        loadUser();

        return {
            getUser: function () {
                return getUser();
            },

            isAuthenticated: function () {
                return getUser() != undefined;
            },

            signOut: function () {
                signOut();
            },

            authenticate: function (username, password) {
                return restService.post('thelist/auth', { username: username, password: password }).
                    success(function (data, status) {
                        var user = {
                            username: username,
                            authtoken: data.token
                        };

                        saveUser(user);
                        $state.go('main');
                    }).
                    error(function (data, status) {
                        //signOut();
                    });
            }
        };
    }]);
