
describe('Testing Angular Test Suite', function(){
	describe('Testing Angular Controller', function(){
		it('Should initialise the title in the scope', function(){
			module('testingAngularApp');

			let scope = {};
			let ctr ;

			//injecting Angular testing helper modules
			inject(function($controller){
				ctr = $controller('testingAngularCtrl', { $scope: scope })
			});

			expect(scope.title).toBeDefined();
			expect(scope.title).toBe("Testing Angular Applications");
		});
	});
});