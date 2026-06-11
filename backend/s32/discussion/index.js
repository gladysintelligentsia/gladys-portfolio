
















let cellphone = {
	name: 'Nokia 3210',
	manufactureDate: 1999
}

console.log('Result from creating objects using object literals {};');
console.log(cellphone);
console.log(typeof cellphone);















function Laptop(name, manufactureDate) {



	this.name = name;
	this.manufactureDate = manufactureDate;
}

console.log('Result from creating a new object from the constructor function:')
let laptop = new Laptop('Lenovo', 2020);

console.log(laptop);

let oldLaptop = Laptop('Portal R2E CCMC', 1980);
console.log(oldLaptop);

let myLaptop = new Laptop('Macbook Air', 2020);
console.log(myLaptop);


console.log(myLaptop.name);
console.log(myLaptop.manufactureDate);


















let person = {
	name: 'Jane',

	talk: function() {

		console.log('Hello myname is ' + this.name);
			}
}


person.talk();












person.walk = function() {
	console.log(this.name + ' walked 25 steps forward.');
}

person.walk();

let friend = {
	firstName: 'Joe',
	lastName: 'Smith',
	address: {
		city: 'Austin',
		country: 'Texas'
	},
	email: ['joe@mail.com', 'joesmith@email.com'],

	introduce: function() {
		console.log('Hello my name is ' + this.firstName + ' ' + this.lastName);
			}
	}

friend.introduce();

console.log(friend.address.city);
console.log(friend.email[1]);




friend.greet = function(object) {
	console.log('Hi ' + object.name + '!');
}

friend.greet(person);



let adventurer = {
	name: 'Arin the Brave',
	level: 10,
	health: 100,
	attack: 20,


	attackMonster: function(monster) {
		return this.name + ' attacked ' + monster.name;
	}
}



function Monster(name, level) {
	this.name = name;
	this.level = level;
	this.health = 2 * level
	this.attack = level;


	this.attackAdventurer = function(adventurer) {
		return this.name + ' attacked ' + adventurer.name;
	}
}


let fenrir = new Monster("Fenrir", 30);
let slime = new Monster("Slime", 10);

console.log(adventurer.attackMonster(fenrir));
console.log(adventurer.attackMonster(slime));

console.log(fenrir.attackAdventurer(adventurer));
console.log(slime.attackAdventurer(adventurer));
