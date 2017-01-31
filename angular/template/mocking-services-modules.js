/*

**********************
***********************

Mocking Services
Mocking Services and Modules in AngularJS
Instead of our tests talking to real services, it will often
 suffice to speak to the 'mock' versions of the services, 
 which will respond to calls accurately, but rather unintelligently. 
 We use mocks because if we started relying on a real service writing real data, 
 or a service changing the location in the address bar, or an unreliable external API, 
 then it may interfere with the execution of our test runner in its own potentially sandboxed environment.
In fact, it's a lot better to mock as we concentrate test code coverage 
purely on our module. Stubbing out endpoints which our module is interacting with is a really good way of ensuring the reliability of our tests is dependent purely on how well the code inside our module performs.
The aim of mocking objects is to remove dependencies on any external factors 
that module X may be interfacing with, such as a browser's API, or an external API endpoint. We can assume this stuff has already been tested.
Stubbing out endpoints which our module is interacting with is a 
really good way of ensuring the reliability of our tests is dependent purely 
on how well the code inside our module performs.
**********************
***********************
*/