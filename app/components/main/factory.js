(function(){
    'use strict';

    var app = angular.module('myApp.factory', ['ngResource',]);

    app.factory("Search", function($resource) {
        return $resource("http://localhost:3000/data/:field/:params", {'field':'@field', 'params':'@params'},{
            get: {method: 'GET', isArray: false},
            get_suggestions: {method: 'GET', url: 'http://localhost:3000/suggestions/:field/:params', isArray: true},
            list: {url:"http://localhost:3000/data/", method: 'GET', isArray: false},
        });
    });
})();
