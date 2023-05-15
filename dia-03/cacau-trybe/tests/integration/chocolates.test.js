const chai = require('chai');
const app = require('../../src/app');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

const { expect } = chai;
chai.use(chaiHttp);

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});



describe('Testando a API Cacau Trybe', function () {
  beforeEach(() => {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
  })
  afterEach(() => {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });

    describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
      it('Retorna o chocolate Mounds', async function () {
        const response = await chai
          .request(app)
          .get('/chocolates/4');

        expect(response.status).to.be.equal(200);
        expect(response.body.chocolate).to.deep.equal(
          {
            id: 4,
            name: 'Mounds',
            brandId: 3,
          });
      });
    });


    describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
      it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
        const response = await chai
          .request(app)
          .get('/chocolates/99');

        expect(response.status).to.be.equal(404);
        expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
      });
    });

    describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
      it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
        const response = await chai
          .request(app)
          .get('/chocolates/brand/1');

        expect(response.status).to.be.equal(200);
        expect(response.body.chocolates).to.deep.equal([
          {
            id: 1,
            name: 'Mint Intense',
            brandId: 1,
          },
          {
            id: 2,
            name: 'White Coconut',
            brandId: 1,
          },
        ]);
      });
    });

    describe('usando metodo GET para buscar total de chocolates', function () {
      it('Total deve ser 4', async function () {
        const response = await chai.request(app).get('/chocolates/total');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal({ total_de_chocolates: 4 });
      });
    });

    describe('Usando metodo GET para pesquisar chocolate pelo termo', function () {
      it('a busca retorna chocolates corretos', async function () {
        const response = await chai.request(app).get('/chocolates/search?name=Mo');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal({
          "chocolate": [
            {
              "id": 3,
              "name": "Mon Chéri",
              "brandId": 2
            },
            {
              "id": 4,
              "name": "Mounds",
              "brandId": 3
            }
          ]
        })
      });

      it('A busca não retorna o chocolate pelo termo pesquisado', async function() {
        const response = await chai.request(app).get('')
      });
    });
  });
});