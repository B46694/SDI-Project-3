//alert("JavaScript works!");

//Brannon DuBose 
//SDI Project 3 JSON data
//Term: 1310
// Project 3: This JSON Data will be used to handle my weather variables

var json = {
	"whatvehicle": { 
		"sunny": {
			"vehicle": "CBR500r",
			"MPG": 70
		},
		"cloudy": {
			"vehicle": "Mustang",
			"MPG": 28
		},
		"storming": {
			"vehile": "Jeep",
			"MPG": 11
		},	
	}		
};


var json = {
	"whatvehicle": [
		{
				"weather": "Sunny", 
				"vehicle": "CBR500r",
				"MPG": 70
			
		},
		{
				"weather": "Cloudy", 
				"vehicle": "Mustang",
				"MPG": 28
			
		},
		{
				"weather": "Storming", 
				"vehicle": "Jeep",
				"MPG": 11
			
		}
	]
	
};


for (var key in json.whatvehicle) {
	var whatvehicle = json.whatvehicle[key];
};