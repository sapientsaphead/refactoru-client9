//Rewrite tests in jasmine style

describe("Splice Function", function(){
	it("Should remove elements from an array.", function() {
		var answer = splice(['a','b','c','d','e'], 2, 2);
		expect(answer).toEqual(['a','b','e']);
	});

	
	it("Should allow original array to remain unchanged (pure function).", function() {
		var a = ['a','b','c','d','e'];
		splice(a, 2, 2);
		expect(a).toEqual(['a','b','c','d','e']);
	});

	it("Should insert an item with the fourth argument.", function() {
		var answer = splice(['a','b','c','d','e'], 1, 2, 'z');
		expect(answer).toEqual(['a','z','d','e']);
	});

	it("Should insert elements without removing anything.", function() {
		var answer = splice(['a','b','c','d','e'], 1, 0, 'z');
		expect(answer).toEqual(['a','z','b','c','d','e']);
	});

	it("Should insert items at the end when inserting items at an arbitrarily high index.", function() {
		var answer = splice(['a','b','c'], 99, 0, 'z');
		expect(answer).toEqual(['a','b','c','z']);
		var answer2 = splice(['a','b','c'], 99, 1, 'z');
		expect(answer2).toEqual(['a','b','c','z']);
	});

	it("Should insert an arbitrary number of values using multiple arguments.", function() {
		var answer = splice(['a','b','c'], 99, 1, 'x','y','z');
		expect(answer).toEqual(['a','b','c','x','y','z']);
	});
});




