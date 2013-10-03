var mocha = require('mocha'),
    expect = require('chai').expect,
    sort = require('../lib/sort');

describe('sort', function () {
  it('should be a function', function () {
    expect(sort).to.be.a('function');
  });
  it('should sort by a single key', function () {
    var list = [{name:'Zach'}, {name:'Alfred'}];

    sort(list, 'name');

    expect(list[0].name).to.equal('Alfred');
  });

  it('should sort number values', function () {
    var list = [{age: 55}, {age: 12}];

    sort(list, 'age');

    expect(list[0].age).to.equal(12);
  });
});