/*
**************
***************
Verifying visual aspects
If you wanted to programatically vefiry the design is pixel perfect 
when rendered, Integration testing frameworks such as PhantomJS has become advanced enough to take 
screenshots at different points in a test, you're always going to need a
 manual stage to tests where someone can verify the rendered design against a visual design.

Developers have even started creating image diff tools to detect regressions in design,
 which is fantastic, but also comes with the burden of having to mock all content which 
 is rendered, to prevent image diff libraries mistakenly detecting different content as visual regressions.

I recently saw a talk at LondonJS by James Cryer who wrote a really
 cool CSS Regression Testing tool, PhantomCSS, which can 
 produce screenshots of various parts of an app, overlayed with a bright colour
  indicating visual regressions. 
*****************
*****************
  */