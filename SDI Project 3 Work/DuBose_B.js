//alert("JavaScript works!");


var milesPerDay = 30;
var withinBudget = true;
var gasBudget = 30;
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
// My while loop to tell me how much i will spend in gas this week
var weekExpense = function(gasBudget) {
	var Monday = 1.5;
	var Tuesday = 1.5;
	var Wednesday = 9.5;
	var Thursday = 1.5;
	var Friday = 3.75;
	var Saturday = 20;
	var total = 0;
	
	while (total <= gasBudget) {
		if (total === 0) {
			total = Monday;	
		}
		else if (total <= 1.5) {
				total = total + Tuesday;		
				}			
		else if (total <= 3) {
				total = total + Wednesday;
				}	
		else if (total <= 12.5) {
				total = total + Thursday;			
				}	
		else if (total <= 14) {
				total = total + Friday;			
				}
		else if (total <= 17.75) {
				total = total + Saturday;			
				}			
	};
						
	if (total >  gasBudget) {
		total = total - Saturday;			
		}	
					
	console.log("The total for the week is " + total + " dollars!");
	
	if (total <= gasBudget) {
		return(true)
		}		
};
	
console.log("Depending on the weather forcast for the week I will drive a specific vehicle in the hopes of staying under my " 
				+ gasBudget + " dollar gas budget!");				
console.log("The data for each vehicle is listed here:");

jsonData(json);	

console.log("I was watching the weather report on sunday, the forcast for the week is as follows:");							

// For loop for predicting the weather forcast for the week
for (var i=0, j=dayOfWeek.length; i < j; i++) {
	console.log( "On " + dayOfWeek[i] + " it will be " + weatherForcast[i] );	
};

console.log("To help calculate my weekly gas expense I have calculated the cost per vehicle per day as follows:");

// code to call the total cost per day per vehicle function
costToDrive = costPerVehicle(milesPerDay)

// code to call the while loop for total gas cost for the week

GasThisWeek = weekExpense(gasBudget);


if (weekExpense(true)) {		
	console.log("test");
}
else {
	console.log("testferwfewfwe");		
}

	
		



