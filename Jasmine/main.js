
/**
		@param arr 						An array
		@param start 					The index to start removing items
		@param numToReplace				The number of items to remove from the array
		@param ...						Items to insert
		@returns						A new array
*/


var splice = function(arr, start, numToReplace, replace) {
	var newArray;
	if(start >= arr.length){
		var c = [];
		for(var i=3; i<arguments.length; i++){
			c.push(arguments[i]);
		};
		newArray = arr.concat(c);
		return newArray;
	}
	else if(replace === undefined){
		var lastIndex = (start + numToReplace);
		var a = [];
		var b = [];
		for (var i = 0; i < parseInt(start); i++){
			a.push(arr[i]);
		}
		for (var i = parseInt(lastIndex); i < arr.length; i++){
			b.push(arr[i]);
		}
		newArray = a.concat(b);
		return newArray;		
	}
	else if(replace !== undefined && parseInt(numToReplace) === 0){
		var a = [];
		var b = [];
		var c = [];
		for(var i=3; i<arguments.length; i++){
			c.push(arguments[i]);
		};
		for (var i = 0; i < parseInt(start); i++){
			a.push(arr[i]);
		}
		for (var i = parseInt(start); i < arr.length; i++){
			b.push(arr[i]);
		}
		var d = a.concat(c);
		newArray = d.concat(b);
		return newArray;
	}
	else if(replace !== undefined && parseInt(numToReplace) > 0){
		var a = [];
		var b = [];
		var c = [];
		for(var i = 3; i<arguments.length; i++){
			c.push(arguments[i]);
		};
		for (var i = 0; i < start; i++){
			a.push(arr[i]);
		}
		for (var i = start + numToReplace; i < arr.length; i++){
			b.push(arr[i]);
		}
		var d = a.concat(c);
		newArray = d.concat(b);
		return newArray;
	}
	else {
		return newArray;
	}
};