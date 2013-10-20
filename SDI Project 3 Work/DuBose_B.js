//alert("JavaScript works!");


var milesPerDay = 30;
var gasBudget = 30;
var withinBudget = true;
var gasPrice = 3.50; 
// JSON Data, data for each vehicle
var json = {
	"whatvehicle": [
		{
				"vehicle": "CBR500r",
				"weather": "Sunny", 
				"MPG": 70			
		},
		{
				"vehicle": "Mustang",
				"weather": "Cloudy", 			
				"MPG": 28
		},
		{
				"vehicle": "Jeep",
				"weather": "Storming", 			
				"MPG": 11							
		}
	]	
};
// calling the jason data into a function
var jsonData = function (json) {
	for (var i = 0; i < json.whatvehicle.length; i++){
		var whatvehicle = json.whatvehicle[i];
		console.log("The " + whatvehicle.vehicle + " gets " + whatvehicle.MPG + " Miles Per Gallon and is suitable for " 
		+ whatvehicle.weather + " weather.");
	};	
};
// Array decloration for What day of the week weather forcast
var dayOfWeek = [
	"Monday", 
	"Tuesday", 
	"Wednesday",
	"Thursday",
	"Friday",	
]; 
// Array decloration- weather for the week
var weatherForcast = [ 
	"Sunny", 
	"Sunny", 
	"Storming",
	"Sunny",
	"Cloudy"
];
// This is the function to calculate cost per vehicle per day
var costPerVehicle = function (milesPerDay) {
		
	console.log("To drive the " + json.whatvehicle[0].vehicle + " to work, it costs " + (
					(milesPerDay / json.whatvehicle[0].MPG) * gasPrice) + " dollars per day!");	
	console.log("To drive the " + json.whatvehicle[1].vehicle + " to work, it costs " + (
					(milesPerDay / json.whatvehicle[1].MPG) * gasPrice) + " dollars per day!");	
	console.log("To drive the " + json.whatvehicle[2].vehicle + " to work, it costs " + (
					(milesPerDay / json.whatvehicle[2].MPG) * gasPrice) + " dollars per day!");	

};
	
console.log("Depending on the weather forcast for the week I will drive a specific vehicle in the hopes of staying under my " 
				+ gasBudget + " dollar gas budget!");				
console.log("The data for each vehicle is listed here:");

jsonData(json);	

console.log("I was watching the weather report on sunday is as follows");							
console.log("The five day forcast for the week is:");

// For loop for predicting the weather forcast for the week
for (var i=0, j=dayOfWeek.length; i < j; i++) {
	console.log( "The forcast for " + dayOfWeek[i] + " is " + weatherForcast[i] );	
};

// code to call the total cost per day per vehicle function
costToDrive = costPerVehicle(milesPerDay)



