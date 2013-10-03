var mocha = require('mocha'),
    expect = require('chai').expect,
    sort = require('../lib/sort');

describe('sort', function () {
  it('should be a function', function () {
    expect(sort).to.be.a('function');
  });
  describe('passing a single sort field', function () {
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
  describe('passing multiple sort fields', function () {
    it('should sort by leftmost field first', function () {
      var list = [{name:'Zach', age:12}, {name:'Alfred', age:55}];

      sort(list, ['name', 'age']);

      expect(list[0].name).to.equal('Alfred');
    });
    it('should sort by subsequent fields', function () {
      var list = [{name:'John', age:19}, {name:'John', age:16}];

      sort(list, ['name', 'age']);

      expect(list[0].age).to.equal(16);
    });
  });
});