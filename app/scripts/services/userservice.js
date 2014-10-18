'use strict';

/**
 * @ngdoc service
 * @name thelistwebApp.userService
 * @description
 * # userService
 * Factory in the thelistwebApp.
 */
angular.module('thelistwebApp')
    .factory('userService', ['$cookieStore', 'restService', function ($cookieStore, restService) {
        var username;

        var saveToken = function(authtoken) {
            $cookieStore.put('authtoken', authtoken);
        };

        var getToken = function () {
            return $cookieStore.get('authtoken');
        };

        var resetToken = function () {
            $cookieStore.remove('authtoken');
        };

        return {
            isAuthenticated: function () {
                return getToken() != undefined;
            },

            signOut: function() {
                resetToken();
            },

            authenticate: function (username, password) {
                return restService.post('thelist/auth', { username: username, password: password }).
                    success(function (data, status) {
                        saveToken(data);
                    }).
                    error(function (data, status) {
                        resetToken();
                    });
            }
        };
    }]);
