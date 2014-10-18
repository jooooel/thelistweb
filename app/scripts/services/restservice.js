'use strict';

/**
 * @ngdoc service
 * @name thelistwebApp.restService
 * @description
 * # restService
 * Factory in the thelistwebApp.
 */
angular.module('thelistwebApp')
    .factory('restService', ['$http', function ($http) {
        var baseUrl = 'http://localhost:8888/';
//        var baseUrl = 'https://2-dot-thelisttest.appspot.com/';
//        var baseUrl = 'https://duochjagthelist.appspot.com/';

        return {
            get: function (path) {
                return $http.get(baseUrl + path);
            },

            put: function (path, data) {
                return $http.put(baseUrl + path, data);
            },

            post: function (path, data) {
                return $http.post(baseUrl + path, data);
            },

            setHeaders: function (user) {
                $http.defaults.headers.common['Username'] = user.username;
                $http.defaults.headers.common['Authorization'] = user.authtoken;
            },

            resetHeaders: function () {
                $http.defaults.headers.common['Username'] = undefined;
                $http.defaults.headers.common['Authorization'] = undefined;
            }
        };
    }]);
