

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
	}

	
	get area() {
		
	}	
}







