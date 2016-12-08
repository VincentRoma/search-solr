(function(){
    'use strict';

    var app = angular.module('myApp.main', []);

    app.controller('MainController', function($scope, Search, $rootScope, $state) {
        $scope.list_mod = {'row': true, 'big': false};

        $scope.toggle_view = function(){
            $scope.list_mod.row = !$scope.list_mod.row;
            $scope.list_mod.big = !$scope.list_mod.big;
        }

        $rootScope.$on('request_has_changed', function(event,nv){
            if(nv){
                var time_now = Date.now();
                Search.get({'field':'ref2','params':nv}).$promise.then(function(data){
                    $scope.entities_list = data.docs;
                    $scope.num_results = data.numFound;
                    $scope.time_to_get = Date.now() - time_now;
                });
            }
            if(!nv){
                $scope.entities_list = [];
                $scope.suggestions = [];
            }
        });

        $scope.display = function(entity){
            $scope.displaying = true;
            $scope.current_entity = entity;
        };
        $scope.goToElement = function(element_id){
            $state.go('part',{'id':element_id});
        };
    });

})();
