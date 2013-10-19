//alert("JavaScript works!");

//Brannon DuBose 
//SDI JS Data Structures
//Term: 1310
// Project 3: JSON Data File

var json = {
	"friends": { 
		"0001": {
			"name": "Chris",
			"age": 30
		},
		"0001": {
			"name": "Brannon",
			"age": 18
		},
		"0003": {
			"name": "Ryan",
			"age": 19
		},	
	}		
};

for (var key in json.friends) {
	var friend = json.friends[key];
	//friend.name
	//friend.age
};

var json2 = {
	"friends": [
		{
				"uuid": "0001", 
				"name": "Chris",
				"age": 30
			
		},
		{
				"uuid": "0002", 
				"name": "Brannon",
				"age": 18
			
		},
		{
				"uuid": "0003", 
				"name": "Ryan",
				"age": 19
			
		}
	]
	
};