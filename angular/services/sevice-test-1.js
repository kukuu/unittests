var app = angular.module('app',[]);

app.factory('ExampleService',function(){
    return {
        f1 : function(world){
            return 'Hello' + world;
        }
    };
});