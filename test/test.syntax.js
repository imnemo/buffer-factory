var should = require('chai').should();
var bufferFactory = require('../index');

describe('Syntax', function(){
  it('Should return a Buffer', function(){
    var buf = bufferFactory('2b', 'hex');
    (Buffer.isBuffer(buf)).should.equal(true);
  })
})