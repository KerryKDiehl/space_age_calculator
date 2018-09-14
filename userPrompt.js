const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

const calculateAge = require('./spaceAgeCalculator.js');

rl.question('How many seconds old are you? ', (seconds) => {
	const years = calculateAge(seconds);
	rl.question("What planet-years do you want to calculate? ", (planet) => {
		console.log(`You are ${years[planet]} years old on ${planet[0].toUpperCase() + planet.substr(1)}`)
		process.exit;
	})
});
