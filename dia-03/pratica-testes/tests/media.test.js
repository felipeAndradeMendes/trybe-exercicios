const chai = require('chai');
const { expect } = chai;
const { calculaMedia } = require('../media.js');

describe('Retorno da média é', function (){
  it('Aprovação, quando maior que 7', function() {
    const mediaCalculada = calculaMedia(8);
    
    expect(mediaCalculada).equals('aprovação');
  });

  it('reprovação, quando menor que 7', function() {
    const mediaCalculada = calculaMedia(4);
    expect(mediaCalculada).equals('reprovação');
  });

  it("Aprovação, quando iguala 7", function() {
    const mediaCalculada = calculaMedia(7);
    expect(mediaCalculada).equals('aprovação');
  });
});