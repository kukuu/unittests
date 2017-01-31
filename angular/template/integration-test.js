/*

*********
Integration Testing
Integration testing is where we write end-to-end tests, performing a sequence 
of a workflow or user journey, and verifying the state 
of the app/UI along the way.

This task is still mostly done manually by QA, 
and good QA engineers do automate tests using tools 
like Selinium or PhantomJS to make their life easier, 
but we're seeing a shift in responsibility now that developers have easy 
access to the tools required to automate end-to-end integration 
tests right from a task runner such as Grunt.

Grunt allows us to install testing frameworks like Jasmine or Karma 
in a single command, and then execute all tests within a project when files change, or during the build process. Simply executing a command like grunt test can lint your code and peform all unit and integration tests. Also take a look at Yeoman as a complete solution for setting
 up an app skeleton as well as full build and testing procedures, 
 which uses Grunt by default.

 Recommended Integration Testing Tools
Karma - "Spectacular Test Runner for JavaScript." (my favourite + uses real browsers!)
CasperJS - "CasperJS is a navigation scripting & testing utility which uses headless browsers."

When user stories are being created, it's a good idea to flesh out integration tests which will correspond to user journeys.
Scenario
User story: "As a user, when I login to my app, I am taken to the dashboard page."
At this point, I've literally just heard about the user story, I might decide my integration tests will look something like this:



**************

*/

describe('user login', function() {

  it('ensures user can log in', function() {
    // expect current scope to contain username
  });
  it('ensures path has changed', function() {
    // expect path to equal '/dashboard'
  });

});
