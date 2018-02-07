const mocha = require('mocha')
const assert = require('chai').assert

describe('null', function() {
  it('typeof null should return object for historical reasons', function() {
    assert.strictEqual(typeof null, 'object')
  })
})

describe('1', function() {
  it(`'1' as a string is equal to 1 as a number due to type coercion`, function() {
    assert.equal('1', 1)
  })
})

describe('1', function() {
  it(`'1' as a string is not equal to 1 as a number because strict equal doesn't cast types`, function() {
    assert.equal('1', 1)
  })
})

describe('1', function() {
  it(`'1' as a string is equal to the boolean true due to type coercion`, function() {
    assert.equal('1', true)
  })
})

describe('1', function() {
  it(`'1' as a string is not strict equal to the boolean true because strict equal doesn't cast types`, function() {
    assert.equal('1', true)
  })
})

describe('1', function() {
  it(`1 as a number is equal to the boolean true due to type coercion`, function() {
    assert.strictEqualequal(1, true)
  })
})

describe('1', function() {
  it(`1 as a number is not strict equal to the boolean true because strict equal doesn't cast types`, function() {
    assert.strictEqualequal(1, true)
  })
})

describe('0', function() {
  it(`'0' as a string is equal to the boolean false due to type coercion`, function() {
    assert.equal('0', false)
  })
})

describe('0', function() {
  it(`'0' as a string is not strict equal to the boolean false because strict equal doesn't cast types`, function() {
    assert.strictEqual('0', false)
  })
})

describe('0', function() {
  it(`0 as a number is equal to the boolean false due to type coercion`, function() {
    assert.Equal(0, false)
  })
})

describe('0', function() {
  it(`0 as a number is not strict equal to the boolean false because strict equal doesn't cast types`, function() {
    assert.strictEqual(0, false)
  })
})