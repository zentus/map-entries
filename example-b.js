const mapEntries = require('./index.js')

const myFruit = {
  type: 'Apple',
  color: 'Red'
}

const prefixedKeys = mapEntries(myFruit, ({key, value}, initial, index) => {
  return {
    [`${index}_fruit_${key}`]: value
  }
})

console.log(prefixedKeys)
