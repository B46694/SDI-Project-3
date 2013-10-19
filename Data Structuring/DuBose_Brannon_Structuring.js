//alert("JavaScript works!");

//Brannon DuBose 
//SDI Data Structuring
//Term: 1310
// Project 3: Data Structuring Lesson

// Data Interchange Formats - a file format used to comunicate data between multiple languages

//php ---> list of friendsa ---> Java

// XML- Data format built on markup tags to store content
// Benifits- Renderable by browser (can also contain HTML content), secuirity schemas (allow for checks between servers and clients), traversable [allows to search for data (find all friend tags)] (nodes)

// Flaws - version dependency, Several deriviatives (RSS, Atom, SOAP, etc)

// JSON (JavaScripts Opject Notation) - data format using HavaScripts obects and arrays
// Benifits - No versions or derivitaves 
// simpler format
// Faster fo most languages to parse
// Parses into language natives
// adopted by most major services
// FLAWS- no security models (in fact, it helps us break one)

var handleData = function (json) {
	for (var i = 0; i < json.friends.length; i++){
		var friend = json.friends[i];
		console.log("User ID: " + friend.uuid + ", Name : " + friend.name + ", Age: " + friend.age);
	};
	
};
	
handleData(json2);

// 
var jsonstring = JSON.stringify(json);
console.log(jsonstring);

var recievedjson = JSON.parse(jsonstring);
console.log(recievedjson);