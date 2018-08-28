# Clean code practices


```
i. Small functions / methods (10 lines of code or less)

ii. Proper naming

iii. Single responsibility

iv. Test should not be fragile


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
