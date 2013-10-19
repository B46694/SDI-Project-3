//alert("JavaScript works!");

//Brannon DuBose 
//SDI Arrays Lesson
//Term: 1310
// Project 3: Arrays Lesson

//var example = ["", [], {}, function(){}, undefined, true, false, 0, 50]; // any data type can be stored in an array. 

var example = ["", [10, 20], {}, function(){}, undefined, true, false, 0, 50]; // any data type can be stored in an array. 

var captian1 = "hook",
	captain2 = "Morgan",
	captian3 = "Sparrow" // no comma (seperator) cuz its the last value
;

var captains = [
	"Hook", 
	"Morgan", 
	"Sparrow"
	
]; 

// Now all three captains are stored in one single variable

//captains[0, 1, 2] defines the exact varaiable in the array- index number 0, 1, 2, string hook

console.log( captains[0] ); 

captains[2] = "Barbosa"; // changed what captains[2] is from this point on

captains[3] = "Jones";

captains[6] = "Davey";

captains.push( "Brannon" ); // push- will push into array, dynamically add a value at the end no matter where the end is.

captains.unshift( "Ryan" ); // unshift- will put whatever is called, into the begining of the array.

captains.pop(); // delete whatever is at the end of the array, pops the last 

captains.shift(); //inverse of pop



console.log( captains ); 

console.log( example[1][0] ); // access array within array, access index 1 then index 0 within index 1

// dynamically access the array

for ( var i=0; i < 3; i++) { // will run i until it is less than 3; 2.
	
	console.log( captains[i] );
};

// when you dont know how many things are in array, before I knew there were 3

//console.log( captains.length );


for ( var i=0, j=captains.length; i < captains.length; i++) { // will run i until it is less than 3; 2. 
// j stores the number of captain.length so it doesnt check the length everytime - j could be anything
	
	console.log( captains[i] );
};


var adjectives = [ 
	"Missing a hand",
	"Delicious",
	"Completley mad bonkers"
];

for (var i=0, j=captains.length; i < j; i++) {
	console.log( "Captian " + captains[i] + " is " + adjectives[i] );
	
};
