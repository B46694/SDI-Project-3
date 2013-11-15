//alert("JavaScript works!");
// Brannon DuBose
// Project 3 Final Work


var milesPerDay = 30;
var gasBudget = 30;
var gasPrice = 3.50; 
// Procedure to determine gasGoal
var gasMoney = function(gasGoal){
	if (gasGoal < gasBudget){ 
		console.log("Great! Lets check the weather and see what we can do.");
		return true
	}else if (gasGoal >= gasBudget){
		console.log("Unfortunatley I am a poor college student... So the most I can spend on gas is $" + gasBudget + ".");
		console.log("Lets see what the least amount I can spend on gas this week is according to the weather!");
		return false
	};
};
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
	return true
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
// This is my for loop variable for showing the weather forcast for the week
var weatherLoop = function (dayOfWeek, weatherForcast) {
	for (var i=0, j=dayOfWeek.length; i < j; i++) {
		console.log( "On " + dayOfWeek[i] + " it will be " + weatherForcast[i] + "." );	
	}
	return true
};
// This is the function to calculate cost per vehicle per day
var costPerVehicle = function (milesPerDay) {	
	console.log("I drive a total of " + milesPerDay + " per day, to get to and from work.");	
	console.log("So, to drive the " + json.whatvehicle[0].vehicle + " to work, it costs " + (
					(milesPerDay / json.whatvehicle[0].MPG) * gasPrice) + " dollars per day!");	
	console.log("To drive the " + json.whatvehicle[1].vehicle + " to work, it costs " + (
					(milesPerDay / json.whatvehicle[1].MPG) * gasPrice) + " dollars per day!");	
	console.log("To drive the " + json.whatvehicle[2].vehicle + " to work, it costs " + (
					(milesPerDay / json.whatvehicle[2].MPG) * gasPrice) + " dollars per day!");	
	return true
};
// My while loop to tell me how much i will spend on gas this week
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
				
	console.log("So, based on the 5 day forcast my gas cost will be " + total + " dollars for the week!");
	
	if (total <= gasBudget) {
		return true
		}	
		// this else if is redundant since it will never return false, but i added it just for continuity
	else if (total > gasBudget) {
		return false		
		}			
};
//this is my function to display my boolean value, if i can afford my gas this week
var getBudgetValue = function (GasThisWeek) {	
	if (GasThisWeek==true) {
			console.log("Yay! I'm within budget, I can go out to lunch one day this week!");
			return true
		}
// I do not need the if false, cuz it will never return false, but just in case i want to play with the code later i am leaving the if false options
	else if (GasThisWeek==false) {
			console.log("I went over budget... Looks like I am riding in the rain...");	
			return false	
		}	
};

// Prompt for gasMoney(gasGoal)
gasGoal = parseInt(prompt("My gas budget for the week is $" + gasBudget + ". What should my goal be for coming under budget?"));

// Calling my whatVehicle(gasGoal) function to determine gas budget
callGoal = gasMoney(gasGoal);

console.log("Depending on the weather forcast for the week, I will drive a specific vehicle in the hopes of staying under my " 
				+ gasBudget + " dollar gas budget!");				
console.log("The data for each vehicle is listed here:");

// This is to display my JSON data for what vehicle is suitable for what weather and MPG
jsonData(json);	

console.log("I was watching the weather report on sunday, the forcast for the week is as follows:");							

// Calling my weather forcast
forcastCall = weatherLoop(dayOfWeek, weatherForcast)

console.log("To help calculate my weekly gas expense I have calculated the cost per vehicle per day as follows:");

// code to call the total cost per day per vehicle function
costToDrive = costPerVehicle(milesPerDay)

// code to call the while loop for total gas cost for the week
GasThisWeek = weekExpense(gasBudget);

// code to display my boolean value of if it is true or false that i met my budget
meetBudget = getBudgetValue(GasThisWeek);

console.log("Lets hope the weather stays sunny for next week...");

console.log(" ");
console.log("********Returns********");
var returns = function (){
	if (whatVehicle = true){
		console.log("I have my proceudure function.");
	}else{
		console.log("I have my proceudure function.");
		};
	if (jsonData = true){
		console.log("I have my jsonData function.");
	}else{
		console.log("I have my jsonData function.");
		};
	if (weatherLoop = true){
		console.log("I have my for loop function and array.");
	}else{
		console.log("I have my for loop function and array.");
		};
	if (costPerVehicle = true){
		console.log("I have my function containing Math.");
	}else{
		console.log("I have my function containing Math.");
		};
	if (weekExpense = true){
		console.log("I have my while loop function.");
	}else{
		console.log("I have my while loop function.");
		};
	if (getBudgetValue = true){
		console.log("I have my boolean function and arguments.");
	}else{
		console.log("I have my boolean function and arguments.");
		};
};
allreturns = returns();
