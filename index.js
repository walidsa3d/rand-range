var is = require('commonchecks')

module.exports = {
  randomInt: function (min, max) {
    if (!is.Integer(min) || !is.Integer(max))
      throw Error
    else if (min >= max)
      throw Error
    else
      return Math.floor(Math.random() * (max - min + 1) + min)
  },
  randomFloat: function (min, max) {
    if (!is.Number(min) || !is.Number(max))
      throw Error
    else if (min >= max)
      throw Error
    else
      return Math.random() * (max - min) + min
  }
}
