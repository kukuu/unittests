/*

**********
***********
Summary
To round things up, remember to keep these rules in mind when writing Unit Tests and Integration Tests for your application:

Try and flesh out outlines for the Integration Tests at the point where your user stories are becoming formalised.
When writing E2E/Integration Tests, always bear in mind they should be application-level, so they should be pretty resistant to changes in the underlying implementation.
Break components down into units/chunks (which will often be single functions), and identify the units which are critical to the reliability of your component. Write unit tests for these chunks.
Remember to test for failure, as well as success. For example, check that an invalid email address doesn't pass an email validation function. Set up some test cases with really bizzare input as well as just a slightly invalid email address.
Consider using Jasmine for unit tests, and Karma for performing end-to-end integration tests.
Mock external modules and services which simply act as endpoints for the code in your module. Don't test things like third party services which should have their own tests.

*******************
**************
*/