'use strict';

var expect = require('chai').expect;


describe('pick-item: ', function () {

  var pickItem = require('../../');

  it('common', function () {

    expect(pickItem()).to.be.undefined;
    expect(pickItem(null)).to.be.null;
    expect(pickItem([])).to.be.undefined;
    expect(pickItem([1])).to.be.equal(1);
    expect(pickItem([1, 2])).to.be.oneOf([1, 2]);

    expect(pickItem('a')).to.be.equal('a');
    expect(pickItem('abc')).to.be.oneOf(['a', 'b', 'c']);

  });
});
