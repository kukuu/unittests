# Types

1. Unit Test - Testing a function in isolation

2. Integration Test - Testing a Component with template interaction

2. End to End Test - Tesring the entire application as a whole, including user interaction, service calls etc

# Test Pyramid (Coverage)

https://github.com/kukuu/AGILITY/blob/master/white-paper/architectural-solutions/test-pyramid-coverage%20(1).jpg


# Clean code practices


```
i. Small functions / methods (10 lines of code or less)

ii. Proper naming

iii. Single responsibility

iv. Test should not be fragile 

i.e instead of asserting that the string toBe 
 "It should have name Alex". Best to assert :

using shouldContain "Alex". This will allow you to modify the string in Future i.e to

It should have name "Alex" the  workhouse


```

# Running Test

```
ng-test 

```


```
Use ''describe'' for a "suit"

''it'' for a series of "specs"

```

# Jasmine's API

```

i toBe

ii. toBeCloseTo

iii. toBeDefined

iv. toBeFalsy

v. toBeGreaterThan

vi. toBeGreaterThanOrEqual

```

# The ''tripple A'' pattern

Arrange

Act

Assert


vote.component.spec.ts
```

import { VoteComponent } from 'vote.component';

describe('VoteComponent', () => {
	
	it('It should increment totalVotes when upvoted', () => {

		//Arrange
		let component = new VoteComponent; // Instantiate an Object from the class

		//Act - call a method on the instantiated oblect
		component.upVote();

		//Assertion
		expect(component.totalvote).toBe(1);

	});
})

```

vote.component.ts

```
export class VoteComponent() {
	totalVotes = 0;

	upVotes() {
		this.totalVotes++ ;
	}

	downVotes(){
		this.totalVotes-- ;
	}
}

```

# Setup and Teardown

Both take function as arguments.


```
beforeEach( (){
	//set up
})

```


```
afterEach( (){

	//cleanup or tear down
})

```


```
beforeAll( () => {
	
})

```

```
afterAll( () => {
	
})

```

# Resources

1. https://www.youtube.com/watch?v=yG4FH60fhUE 

2. https://www.youtube.com/watch?v=sU2lF3gDKHI 

3. https://medium.com/developing-an-angular-4-web-app/setting-up-our-angular-4-project-from-scratch-bdbc616f92f2

4. https://github.com/theintern/example-angular


