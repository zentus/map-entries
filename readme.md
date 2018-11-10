# map-entries
> Array.map() for objects

Map over an object, alter it's keys and values and return a new object.

## Installation

```sh
npm install map-entries --save
```

## Usage example

```javascript
import mapEntries from 'map-entries'

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
//=>  { '0_fruit_type': 'Apple', '1_fruit_color': 'Red' }
```

## License

Distributed under the [MIT license](/license)
