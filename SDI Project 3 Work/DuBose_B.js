//alert("JavaScript works!");

// JSON Data, weather declarations
	
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

var handleData = function (json) {
	for (var i = 0; i < json.whatvehicle.length; i++){
		var whatvehicle = json.whatvehicle[i];
		console.log("Weather: " + whatvehicle.weather + ", Vehicle: " + whatvehicle.vehicle + ", MPG: " + whatvehicle.MPG);
	};
	
};

	
handleData(json);
