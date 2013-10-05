// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false);
//   });
// });

//Rewrite tests in jasmine style

describe("Splice Function", function(){
	it("Should remove elements from an array.", function() {
		expect((splice(['a','b','c','d','e'], 2, 2).toEqual(['a','b','e']));
	}

	it("Should allow original array to remain unchanged (pure function).", function() {
		expect((splice(['a','b','c','d','e'], 2, 2).toEqual(['a','b','e']));
	}

	it("Should insert an item with the fourth argument.", function() {
		expect((splice(['a','b','c','d','e'], 2, 2).toEqual(['a','b','e']));
	}

	it("Should insert elements without removing anything.", function() {
		expect((splice(['a','b','c','d','e'], 2, 2).toEqual(['a','b','e']));
	}

	it("Should insert items at the end when inserting items at an arbitrarily high index.", function() {
		expect((splice(['a','b','c','d','e'], 2, 2).toEqual(['a','b','e']));
	}

	it("Should insert an arbitrary number of values using multiple arguments.", function() {
		expect((splice(['a','b','c','d','e'], 2, 2).toEqual(['a','b','e']));
	}
});


// TESTS (Normally you'd have to write these yourself! But a magical elf left these for you...)

// You should be able to remove elements from an array.
// assertArraysEqual(splice(['a','b','c','d','e'], 2, 2),  ['a','b','e']); //fail

// The original array should remain unchanged (pure function). 
// var a = ['a','b','c','d','e'];
// splice(a, 2, 2);
// assertArraysEqual(a,  ['a','b','c','d','e']); 

// You can insert an item with the fourth argument.
// assertArraysEqual(splice(['a','b','c','d','e'], 1, 2, 'z'),  ['a','z','d','e']); 

// You can insert elements without removing anything.
// assertArraysEqual(splice(['a','b','c','d','e'], 1, 0, 'z'),  ['a','z','b','c','d','e']);  

// Inserting at an arbitrarily high index should just insert at the end.
// assertArraysEqual(splice(['a','b','c'], 99, 0, 'z'),  ['a','b','c','z']);  
// assertArraysEqual(splice(['a','b','c'], 99, 1, 'z'),  ['a','b','c','z']);  

// You should be able to insert an arbitrary number of values using multiple arguments.
// assertArraysEqual(splice(['a','b','c'], 99, 1, 'x','y','z'),  ['a','b','c','x','y','z']);


