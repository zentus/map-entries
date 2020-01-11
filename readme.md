# map-entries
> .map() for objects

Map over an object, alter it's keys and values and return a new object.

## Installation

```sh
npm install map-entries --save
```

## Usage example

```javascript
import mapEntries from 'map-entries'

const myObject = {
  type: 'Apple',
  color: 'Red'
}

const mappedObject = mapEntries(myObject, ({key, value}, i) => ({
  [`${key}_${i}`]: value
}))

console.log(mappedObject)
//=>
{
  '0_type': 'Apple',
  '1_color': 'Red'
}
```

## License

Distributed under the [MIT license](/license)
