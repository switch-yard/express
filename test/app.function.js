'use strict'

var assert = require('node:assert')
var express = require('..')

describe('express()', function(){
  it('should return an app function', function(){
    assert.strictEqual(typeof express(), 'function')
  })
})
