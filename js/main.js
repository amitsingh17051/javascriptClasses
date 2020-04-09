/*

class Rectangle {
	constructor(width, height, color) {
		console.log('Rectangle is created');

		this.width = width;
		this.height = height;
		this.color = color;
		
	}

	getArea() {
		return this.width * this.height;
	}

	


	printDesc() {
		console.log(`I am a rectangle of ${this.width} x ${this.height} and i am ${this.color} `);
	}
}




let myRectangle1 = new Rectangle(3,5,'red');
let myRectangle2 = new Rectangle(3,10,'blue');

//console.log(myRectangle2.printDesc());


class Square {
	constructor (width) {
		this.width = width;
		this.height = width;
		this.request = 0;
	}

	
	get area() {
		this.request++;
		return this.width * this.height;
	}	


	set area(area) {
		this.width = Math.sqrt(area);
		this.height = this.width;
	}
}

let Square1 = new Square(4);
Square1.area = 64;
console.log(Square1.area);
console.log(Square1.request);*/




// static method

/*class Square {
	constructor(width) {
		this.width = width;
		this.height = width;
	}

	static equals(a, b) {
		return a.width * a.height === b.width * b.height; 
	}

	static isValid (width, height) {
		return width === height;
	}
}


let square1 = new Square(8);
let square2 = new Square(8);


console.log(Square.isValid(6, 6));
*/


// inharitance

/*class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}


	describe() {
		console.log(`I am ${this.name} and my age is ${this.age}`);
	}
}


class Programmer extends Person {
	constructor(name, age, yearOfExperience) {
		super(name, age);


		// Custome Behaviour
		this.yearOfExperience = yearOfExperience;

	}

	code() {
		console.log(`${this.name} is coding`);
	}
}

const programmers = [
	new Programmer('dom', 56, 24),
	new Programmer('amit', 25, 2),
	new Programmer('vinay', 36, 14)
];




//programmer1.describe();
function developSoft(programmers) {
	// Develop software

	for(let programmer of  programmers) {
		programmer.code();
	}

}

developSoft(programmers);
*/

// Polymorphism


/*class Animal {
	constructor(name) {
		this.name = name;
	}


	makeSound() {
		console.log('Genric Animal Sound!!');
	}
}


class Dog extends Animal{
	constructor(name) {
		super(name);
	}

	makeSound() {
		super.makeSound();
		console.log('Woof Woof!!');
	}
}


const a1 = new Animal('Ben');
const a2  = new Dog("jeff");
a2.makeSound();
a1.makeSound();
*/


// bind html element

class ListBinding {

	constructor(element) {
		this.listElement = element;

		this.textList = [
			
		];
	}

	static createListItem(text) {
		const li = document.createElement('li');
		li.textContent = text;
		return li;
	}



	
	update() {
		// Remove Exiting Li 
		while(this.listElement.firstChild) {
			this.listElement.removeChild(this.listElement.firstChild);
		}


		for (let text of this.textList) {
			this.listElement.appendChild(ListBinding.createListItem(text));
		}

	}


	add(text) {
		this.textList.push(text);
		this.update();
	}

	remove(index) {
		this.textList.splice(index, 1);
		this.update();
	}




}
