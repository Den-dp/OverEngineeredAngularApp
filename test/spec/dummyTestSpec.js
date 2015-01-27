'use strict';
var assert = chai.assert;

describe('dummy test', function () {
    it('should test smthnk', function () {
        var foo = 'bar';
        var tea = {flavors: '123'};
        assert.typeOf(foo, 'string');
        assert.equal(foo, 'bar');
        assert.lengthOf(foo, 3);
        assert.property(tea, 'flavors');
        assert.lengthOf(tea.flavors, 3);
    })
});