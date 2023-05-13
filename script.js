

let myCharacter = {
	name: "Luciel",
	level: 69,
	endurance: 100,
	strenght: 1000,
	workBreaker = function(){
		console.log() 
	}


}

function Character(name, level,endurance, attack) {
	this.name = name;
	this.level = level;
	this.endurance = endurance;
	this.strenght = level;

	this.worldBreaker = function(target) {
		console.log(this.name + " attacked using World Breaker " + target.name)
	};
	this.faint = function() {
		console.log(this.name + 'fainted');
	}
}

let mikael = new Character('Mikael', 16)
let memeLord = new Character('GayLord69', 5)

mikael.worldBreaker(memeLord);