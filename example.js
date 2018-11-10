const objectMap = require('./index.js')

const car = {
	color: 'Red',
	brandModel: 'Saab_900'
}

const test = objectMap(car, (entry, initial) => {
	const {key, value} = entry

	const brand = value.split('_')[0]
	const model = value.split('_')[1]

	if (key === 'brandModel') {
		return {
			brand,
			model
		}
	}

	return initial
})

console.log(test)
