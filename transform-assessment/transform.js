console.log('debug in the console of your index.html file');

// define loop here
var loop = function (collection, elem){
	for (var i=0; i<collection.length; i++)
		console.log (collection[i]);
}



// buggy transform function
// Instructor note: do not look at past transforms that you've built
var transform = function(collection, callback){
    result = [];

    loop(collection, function(index, element){
        result.push(element); //removed callback - can only return one item
    });

    return result;
};

// test data
var numbers = [1, 2, 3, 4, 5];

// test case
var doubleNumbers = transform(numbers, function(elem){
    return elem * 2;
}); // should return: [2, 4, 6, 8, 10];


console.log(doubleNumbers(numbers));














// this is made for you
function loop(collection, callback){
	if (Array.isArray(collection)){
		for (var i = 0; i < collection.length; i++) {
			callback(collection[i], i);
		};
	} else {
		for (var key in collection) {
			callback(collection[key], key);
		};
	}
};








