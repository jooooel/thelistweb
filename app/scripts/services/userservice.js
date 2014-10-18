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
        var user;

        var saveToken = function(authtoken) {
            $cookieStore.put('authtoken', authtoken);
        };

        var getToken = function () {
            return $cookieStore.get('authtoken');
        };

        var resetToken = function () {
            $cookieStore.remove('authtoken');
        };

        var signOut = function () {
            user = undefined;
            resetToken();
            $state.go('signin');
        };

        return {
            getUser: function () {
                return user;
            },

            isAuthenticated: function () {
                return getToken() != undefined;
            },

            signOut: function() {
                signOut();
            },

            authenticate: function (username, password) {
                return restService.post('thelist/auth', { username: username, password: password }).
                    success(function (data, status) {
                        user = { username: username };
                        saveToken(data);
                        $state.go('main');
                    }).
                    error(function (data, status) {
                        //signOut();
                    });
            }
        };
    }]);
