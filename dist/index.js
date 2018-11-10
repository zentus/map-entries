"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapEntries = function mapEntries(object, callback) {
  var entries = Object.entries(object);
  return entries.reduce(function (acc, entry, index) {
    var key = entry[0];
    var value = entry[1];
    var keyValue = {
      key: key,
      value: value
    };

    var initial = _defineProperty({}, key, value);

    var input = callback(keyValue, initial, index);
    acc = _objectSpread({}, acc, input);
    return acc;
  }, {});
};

module.exports = mapEntries;
