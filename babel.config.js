const presets = [
  ["@babel/env", {
    targets: {
      ie: "11"
    }
	}],
	["minify"]
]

module.exports = { presets }
