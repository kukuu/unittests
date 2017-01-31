/*
********************************
********************************
Author: Alexander Adu-Sarkodie
********************************
********************************


It's easy for a semi-technical manager to say "write all tests at the start",
 but the truth is, you often don't know all the small
  components which are required when presented with a high-level user story.

I usually write unit tests as I go along, as I develop all the 'units' required 
to implement a user story. You're going to constantly be changing functions around, 
refactoring and abstracting parts away, tidying up what's 
going in and coming out of functions, trying to preempt any of this is going to cause a lot of wasted time.

Scenario
............
////////////////////////////////////////////////////////////////////////////////
User story: "As a user, when I login to my app, I am taken to the dashboard page."
/////////////////////////////////////////////////////////////////////////////////


How do we break it down into tests? Break it down like this:  
Story → Features → Units
1. I'll immediately select the 'login form' as a feature of this story which I can test, 
2. And I'll  add the following test outlines for the important units 
that are required to implement this feature correctly:

****************
****************

*/

describe('user login form', function() {

    // critical
    //Evaluation "it" blocks for each test
    //1.
    it('ensure invalid email addresses are caught', function() {});
    //2
    it('ensure valid email addresses pass validation', function() {});
    //3
    it('ensure submitting form changes path', function() { });

    // nice-to-haves
    it('ensure client-side helper shown for empty fields', function() { });
    it('ensure hitting enter on password field submits form', function() { });

});