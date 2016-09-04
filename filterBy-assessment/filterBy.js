console.log('debug in the console of your index.html file');

// define loop here:
var loop = function (collection, elem){
	for (var i=0; i<collection.length; i++)
		console.log (collection[i]);
}


// we've written filterBy for you here:
var filterBy = function(collection, predicate) {
	var result = [];
	loop(collection, function(elem) {
		if (predicate(elem)) {
			result.push(elem);
		}
	});
	return result;
};


// use filterBy on the `numbers collection` to return an array of odd numbers
var numbers = [22, 25, 78, 61, 36, 981, 313];

var myPredicate = function (elem){
	(elem % 2)  && !(elem % 2 === 0);
}

console.log(filterBy(numbers, myPredicate));

//smaller than threshold:


// use filterBy on the `numbers collection` to return an array of numbers that are smaller
// than the threshold.
var threshold = 75;
var thisPredicate = function(elem){
       elem < 75;
};
var filterBy = function(collection, predicate) {
	var result = [];
	loop(collection, function(elem) {
		if (predicate(elem)) {
			result.push(elem);
		}
	});
	return result;
};

console.log (filterBy(numbers, thisPredicate));



// use filterBy on the `people collection` to return an array of objects who's age is between 27 and 35.
var people = [{name: "Albrey", age: 25}, {name: "Dion", age: 26}, {name: "Kmack", age: 28}, {name: "Kanye", age: 32}, {name: "Beyonce", age: 39}, {name: "Jay-z", age: 42}];


var filterBy = function(collection) {
	var result = [];
	loop(collection, function(person, key) {
		if (key === 'age') && (person.age < 35) &&  (person.age > 27)
			result.push(person);
		}
	
	});
	return result;
};

console.log (filterBy(people, person);



