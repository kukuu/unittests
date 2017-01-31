/*
********************************
********************************
Author: Alexander Adu-Sarkodie
********************************
********************************
*/

it('should get login success',
  inject(function(LoginService, $httpBackend) {

    $httpBackend.expect('POST', 'https://api.www.goldhawk-college.com/istudio/login')
      .respond(200, "[{ success : 'true', id : 123 }]");

    LoginService.login('test@test.com', 'password')
      .then(function(data) {
        expect(data.success).toBeTruthy();
    });

  $httpBackend.flush();
});