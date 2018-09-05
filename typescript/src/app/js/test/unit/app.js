
//Testing an Angular Controller

let testingAngularApp = angular.module('testingAngularApp', []);

testingAngularApp.controller('testingAngularCtrl', function($rootScope, $scope){

	$scope.title = "Testing Angular Applications";
});