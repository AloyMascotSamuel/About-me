
// var johnsAge = 18;
// var johnsHeight = 256;
// var charlesAge = 19;
// var charlesHeight = 326;
// //3rd player name is Adam
// var adamAge = 31;
// var adamHeight = 300;

// var scoreJohn = johnsHeight + 5 * johnsAge;
// var scoreCharles = charlesHeight + 5 * charlesAge;
// var adamscore = adamHeight + 5 * adamAge;

// /*if (scoreJohn > scoreCharles){
// 	console.log('John scored: ' + scoreJohn + ' ' + 'John is the winner')
// } else if (scoreCharles > scoreJohn){
// 	console.log('Charles scored: ' + scoreCharles + ' Charles is the winner')
// }
// else{
// 		console.log('None winned')
// } */

// if (scoreJohn > scoreCharles && scoreJohn > adamscore){
// 	console.log('John scored: ' + scoreJohn + ' ' 
// 		+ 'John is the winner')
// }
//  else if (scoreCharles > scoreJohn && scoreCharles > adamscore){
//  	console.log('Charles scored: ' + 
//  		scoreCharles + ' Charles is the winner')
//  }
// else if (adamscore > scoreJohn && adamscore > scoreCharles){
// 	console.log('Adams scored '+ adamscore + ' points')
// }

// else(console.log('there is a draw'))

// //functions ============
// function calculateAge(yearOfBirth){
// 	var age = new Date().getFullYear() - yearOfBirth;
// 	return age;
// }

// var myAge = calculateAge(2003)
// console.log('your are ' + myAge + ' years old');
//console.log(samAge);

//functions can call another function

// function yearsUntilRetirement(name, birthAge){
// 	var age = calculateAge(birthAge);
// 	var retirement =  65 - age;

// 	if (retirement >= 0){
// 		console.log(name + ' retires in ' + retirement + ' years');
// 	}
// 	else{
// 		console.log(name + ' Has retired ' );
// 	}
// 	}
// yearsUntilRetirement('samuel', 1990)
// yearsUntilRetirement('Mike', 1984)
// yearsUntilRetirement('Jay', 1945)

//arrays
//  var nameA = ['John', 'Mike', 'Psalm'];
// var yrs = new Array(1990, 1995, 1999);

// var nameB = ['john', 'Smith', 1990, 
// 	'Designer', false];
// 	console.log(nameB.push('blue'));
// 	console.log(nameB)
// 	console.log(nameB.unshift('Mr'))
// 	console.log(nameB)
// 	console.log(nameB.pop())
// 	console.log(nameB)
// 	console.log(nameB.shift())
// 	console.log(nameB)
	
// 	if ( nameB.indexOf('teacher') === -1){
// 		console.log('John is not a Teacher');
// 	};

// 	//0bject practice ========== 
// 	( function(){
// 		var john = {
// 		name : 'John',
// 		lastName : 'Smith',
// 		yearOfBirth : 1990,
// 		job : 'teacher',
// 		isMarried : false,

// 		calculateAges : function()

// 		{
// 			var year = new Date().getFullYear();
// 			var nice =  year - this.yearOfBirth;

// 			var  retirementAge = 70;
// 			return retirementAge - nice;


// 		}
	
// 	}
// 	console.log(john);
// 	console.log(john.lastName)
// 	console.log(john['name'])
// 	var xyz = 'job';
// 	console.log(john[xyz]);
// 	john.lastName = 'Muller';
// 	john['job'] = 'programmer';
// 	console.log('======================')
// 	console.log(john.lastName)
// 	console.log(john.job)
// 	console.log(john)
// 	console.log(delete john.lastName)
// 	console.log(john)

// 	var jane = new Object();
// 	jane.name = 'Jane';
// 	jane.lastName = 'Alexas';
// 	jane['job'] = 'Nurse';
// 	jane['yearOfBirth'] = 1995;
// 	jane['isMarried'] = false;
// 	console.log(jane);
// 	console.log('======================')
// 	console.log(john.calculateAges());
// }())

	
// var john = {
// 	name: 'John',
// 	yearOfBirth: 1990,
// 	isMarried: false,
// 	calculateAge: function(){
// 		var date = new Date().getFullYear();
// 		return date - this.yearOfBirth;
// 	}
// }
 
//  console.log(john.calculateAge())
//  john.age = john.calculateAge();
//  console.log(john)

//Doing loops

  
// var scores = [24, 32,17];
// var arraylength = scores.length;
// var roundNumber = 0;
// var msg = '';
// var i;

// for (i=0; i < arraylength; i++){
// 	roundNumber = (i + 1);

// 	msg += 'Round ' + roundNumber + ' :';
// 	msg += scores[i] + ' <br />';
// }

// document.getElementById('answer').innerHTML = msg;

// var table = 3;
// var operator = 'addition';
// var i// 
//  = 1;
// msg = '';

// if (operator === 'subtraction'){
// 	while(i <= 10){
// 		msg += i + " + 3 = " + ( i + table) + '<br>'
// 		i++;
// 	}
// }

// else{
// 	while(i <= 10){
// 		msg += i + ' x 3 = ' + (i * table) + '<br>'
// 		i++; 
// 	}
// }

// console.log(msg


 var years = [2000, 2001, 2002, 2003, 2004, 2005, 2006];
 var names = ['job', 'Bob', 'Jonny', 'Sam', 
 	'Jane', 'Jim', 'Nelson']

 // for(i; i < years.length; i++){
 // 	 age[i] =  realAge - years[i];
 // 	// msg += names[i] + ' is ' + age + ' years ' + '<br />';
 // 	if (age[i] >=18){
 // 		msg += names[i] + ' is ' + age[i] + ' years, and if full of age ' + '<br />';
 // 	}
 // 	else{
 // 		msg += names[i] + ' is ' + age[i] + ' years, is not up to 18 ' + '<br />';
 // 	}
 // } correct!

 
function calcAges(years){
 	
 	 var age = [];
 	 var fullAge = [];


	var realAge = new Date().getFullYear();
	var msg = '';
 	var i = 0;

 	for (i = 0; i < years.length; i++){
 	age[i] = realAge - years[i];
 	console.log(age[i]);
 }
  for (i = 0; i < age.length; i++){
  	if (age[i] >= 18){
  		console.log(names[i] + ' is ' + age[i] + ' and is full of age.');
  		fullAge.push(true);
  		// console.log(msg);

  	} else {
  		console.log(names[i] + ' is ' + age[i] + ', and is less than 18 years ');
  		fullAge.push('false');
  		// console.log(msg);

  	}
  }

  return fullAge;

}

console.log(calcAges(years));