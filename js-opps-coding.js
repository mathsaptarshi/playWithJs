// --------Class-----------
//old js
function createNewPerson(name) {
	const obj = {};
	obj.name = name;
	obj.greeting = function() {
	  alert('Hi! I\'m ' + obj.name + '.');
	};
	return obj;
  }
  
  const salva = createNewPerson('Salva');
  salva.name;
  salva.greeting();


// 1. Check for reference equility

class Car {}
let car1 = new Car();
let car2 = new Car();
let car3 = car1;

let equal1 = car1===car2;
let equal2 = car1===car3;

console.log(equal1);
console.log(equal2);

// 2. Constants

class Calender {
	get months(){
	 return 12;
	}
}

let calender = new Calender();
let months = calender.months;
console.log(months)
//12






// ************************************Construntor***************************



// 3.Default constructor || Call of the own constructor

//function Man() {}; old js
//ES6
class Man{}
let man1 = new Man();
console.log(man.constructor.name)
//Man

// 4. Optionals parameter values

class Man{
	constructor(name = "unknown",country = "unknown"){
		this.name = name;
		this.country = country;
	}
}
let man1 = new Man();
/* 
man1.name = unknown
man1.country = unknown;
*/
let man2 = new Man("Saptarshi");
/* 
man1.name = Saptarshi
man1.country = unknown;
*/

// 5. Replacement of the parent constructor
class Man{
	constructor(name){
		this.name = name
	}
}

class Employee extends Man{
	constructor(name){
		super(name);
		this.position = "unknown";
	}
}

let employee = new Employee("Max");

console.log(employee.name);
console.log(employee.position);

/* 
Max
Unknown
 */

// **************************Create a copy of a object******************

class Shape {
	constructor(lineCount, name){
		this.lineCount = lineCount;
		this.name = name;
	}
}

let square = new Shape(4,"Square");
let squareCopy = Object.assign({},square);

square.lineCount = 5;

console.log(square);
console.log(squareCopy);