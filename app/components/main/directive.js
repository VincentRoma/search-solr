(function(){
    'use strict';

    var app = angular.module('myApp.directives', []);

    app.directive("faureciaSearch", function(Search, $rootScope) {
        return {
            scope: {
            },
            templateUrl: 'components/main/html/faurecia-search.html',
            link: function (scope, element) {
                scope.$watch("request", function(nv, ov){
                    if(nv && nv !== ov){
                        var time_now = Date.now();
                        Search.get_suggestions({'field':'ref2','params':nv}).$promise.then(function(data){
                            scope.suggestions = data[0];
                            scope.suggestions_show = true;
                        });
                    }
                    if(!nv){
                        scope.suggestions_show = false;
                    }
                    $rootScope.$emit('request_has_changed', nv);
                });
            }
        };
    });

})();
