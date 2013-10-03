var mocha = require('mocha'),
    expect = require('chai').expect,
    sort = require('../lib/sort');

describe('sort', function() {
  it('should be a function', function() {
    expect(sort).to.be.a('function');
  });
});