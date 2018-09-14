/*
Given an age in seconds, calculate how old someone would be on:

Earth: orbital period 365.25 Earth days, or 31557600 seconds
Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years

So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.

Should return an object in the following format:
{
	earth: <age in years on earth>
	mercury: <age in years on mercury>
	venus: <age in years venus>
	...
}
*/

const secondsInEarthYear = 31557600;

const earthYearCalculator = (seconds) => {
  return seconds/secondsInEarthYear;
}

const planets = [
	'earth',
	'mercury',
	'venus',
	'mars',
	'jupiter',
	'saturn',
	'uranus',
	'neptune',
]

const planetDenominators = {
	earth: 1,
	mercury: 0.2408467,
	venus: 0.61519726,
	mars: 1.8808158,
	jupiter: 11.862615,
	saturn: 29.447498,
	uranus: 84.016846,
	neptune: 164.79132,
}

const calculatePlanet = (earthYears, planet) => {
	return Number((earthYears/planetDenominators[planet]).toFixed(2))
}

const calculateAge = (seconds) => {
	const earthYears = earthYearCalculator(seconds)
	const planetYears = {};
	planets.forEach((planet) => {
		const years = isNaN(seconds) ? 0 : calculatePlanet(earthYears, planet)
		planetYears[planet] = years
	})
	return planetYears
}

module.exports = calculateAge
