# Jasmine

Folder structure

```

js
|--tests
|  |--fixtures
|  |--spec
SpecRunner.html

```

```

Red -FAIL

Spec

expect( kata.fizzBuzz( 3 ) )
    .toEqual( 'Fizz' );
fizzBuzz.js

var fizzBuzz : function( test ){
    //nothing is here yet
}

```


```
Green
The simplest implementation.

Spec

expect(kata.fizzBuzz(3)).toEqual('Fizz');
fizzBuzz.js

var fizzBuzz : function( test ){
    return "Fizz";
}

```

```
Refactor

Spec

expect(kata.fizzBuzz(3)).toEqual('Fizz');

expect(kata.fizzBuzz(0)).toEqual( '' );
fizzBuzz.js

var fizzBuzz : function( test ){
    return "Fizz";
}

```

```

var fizbuzz: function(test){
	
	if(test % 3 === 0){
		return "fizz"
	}

	return '';
}

```

``` 

Refactor
Spec

expect(kata.fizzBuzz(3)).toEqual('Fizz');

expect(kata.fizzBuzz(0)).toEqual( '' );
fizzBuzz.js

var fizzBuzz : function( test ){
  if ( test % 3 === 0 ){
      return 'Fizz';
  }
  return '';
}

```

SpecRunner.html

```
<!-- include source files here... -->
<script type="text/javascript" 
    src="src/Player.js"></script>
<script type="text/javascript" 
    src="src/Song.js"></script>

<!-- include spec files here... -->
<script type="text/javascript" 
    src="spec/SpecHelper.js"></script>
<script type="text/javascript" 
    src="spec/PlayerSpec.js"></script>

```

 Specs

```

describe('fizzbuzz'){

  it(
    'should return fizz when the number is divisible by 3',
    function(){

      expect(
        kata.fizzBuzz(3)
      ).toEqual('Fizz'); //matcher

      expect(
        kata.fizzBuzz(0)
      ).toEqual( '' );
  });
  
});

```

Test Setup & Teardown

```

describe('fizzbuzz'){

	beforeEach( function (){
	  //run before each "it"

	  foo = 0;
	  foo +=1;

	});

	afterEach( function (){
	  //run after each "it"
	});

  it(
    'should return fizz when the number is divisible by 3',
    function(){

      expect(
        foo.fizzBuzz(3)
      ).toEqual('Fizz'); //matcher

      expect(
        foo.fizzBuzz(0)
      ).toEqual( '' );
  });
  
});





```


Matchers

```
toBe( 'expected' ) //exact compare (===) 

toEqual( 'expected' ) //more general compare, can compare objects

toBeUndefined( ) //checks for undefined

toBeDefined( ) //checks if var is not undefined

toMatch( /regex/ ) //matches against regex

toBeNull( /regex/ ) //checks if a var is null

toBeTruthy( ) //checks if var is truthy

toBeFalsy( ) //checks if var is falsy

toBeLessThan( number ) //checks if value is less than number

greaterThan( number ) //checks if value is greater than number

toContain( item ) //look for item in array

expect( function(){ fn(); }).toThrow( e ) //fn() should throw an error


```

not

Any matcher can be "reversed" by including the not keyword.

```
expect( 5 ).not.toEqual( 3 );

```

## Resources

