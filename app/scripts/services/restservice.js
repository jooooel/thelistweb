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

        return {
            post: function (path, data) {
                return $http.post(baseUrl + path, data);
            }
        };
    }]);
