const mapEntries = (object, callback) => {
	const entries = Object.entries(object)

	return entries.reduce((acc, entry, index) => {
		const key = entry[0]
		const value = entry[1]
		const keyValue = {
			key,
			value
		}

		const initial = {
			[key]: value
		}

		const input = callback(keyValue, initial, index)

		acc = {
			...acc,
			...input
		}

		return acc
	}, {})
}

module.exports = mapEntries
