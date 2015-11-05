var assert = require('chai').assert
var rand = require('../index.js')

describe('random', function () {
  it('check if number', function (done) {
    assert.typeOf(rand.randomInt(3, 4), 'number')
    done()
  })
  it('check if number', function (done) {
    assert.typeOf(rand.randomFloat(3, 4), 'number')
    done()
  })
})
