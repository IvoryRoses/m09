let Trainer = {
	name: "Burikat",
	age: 27,
	pokemon: [
		'Luciel',
		'Mikael',
		'Sudoquel',
		'Mael'
	],
	talk: function(){
		console.log('_pokemon_ i choose you !')
	},
	friends: {
		Alex: {
			name: 'Dorothy',
			level: 100
		},
		Gaylord: {
			titles: 'Solo leveler',
			name: 'He was the weakest',
			level: 69
		}
	},
	attack: function(){
		console.log("This Pokemon tackled targetPokemon")
		console.log("targetPokemon's health is now reduced to targetPokemonHealth")
	},
	dead: function(){
		console.log("Pokemon died.")
	}
}

function Pokemon(name,level,endurance,strenght){
	this.name = name;
	this.level = level;
	this.endurance = 1*level;
	this.strenght = 1*level;

	this.talk = function(){
		console.log(this.name + ' I Chooce You !')
	}
	this.attack = function(target){
		console.log(this.name + ' tackled ' + target.name)
		var totalEndurance = target.endurance-this.strenght;
		console.log(target.name + ' health is now reduced to ' + totalEndurance)
		if (totalEndurance <= 0){
			this.dead(target.name)
		}
	}
	this.dead = function(name){
		
			console.log(name + ' died.')
		}
}

let luciel = new Pokemon(Trainer.pokemon[0], 99)
let mikael = new Pokemon(Trainer.pokemon[1], 100)
let sudoquel = new Pokemon(Trainer.pokemon[2], 43)
let mael = new Pokemon(Trainer.pokemon[3], 23)

luciel.talk();
luciel.attack(mikael);