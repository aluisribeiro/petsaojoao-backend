import supertest from 'supertest'
import app from "@/frameworks/express/index";

describe('CreateTutor', () => {
  test('should return error if the data format is not json', async (done) => {
    await supertest(app)
      .post('/createTutor')
      .send("<?xml version='1.0'><filmes><filme id='1'><titulo>O XML veste prada</titulo><resumo>O filme mostra a elegância da XML na representação de dados estruturados e semi estruturados.</resumo><genero>Aventura</genero><genero>Documentário</genero><elenco><ator>Mark UPlanguage</ator><ator>Mary well-Formed</ator><ator>Sedna D. Atabase</ator></elenco></filme></filmes>")
      .expect(400)
      done();
  })

  test('should return error if any mandatory fields are not filled', async (done) => {
    await supertest(app)
      .post('/createTutor')
      .send({
        name: "",
        email: "cesar@hotmail.com",
        rg: "12.345.678-9",
        cpf: "123.456.789-10",
        phone: "123456789",
        cep: "13990000",
        whatsapp: "987654321",
        street: "Rua dos Alfeneiros",
        number: "04",
        area: "Surrey",
        complement: ""
      })
      .expect(400)
      done();
  })

  test('should return success', async (done) => {
    await supertest(app)
      .post('/createTutor')
      .send({
        name: "cesar",
        email: "cesar@hotmail.com",
        rg: "12.345.678-9",
        cpf: "123.456.789-10",
        phone: "123456789",
        cep: "13990000",
        whatsapp: "987654321",
        street: "Rua dos Alfeneiros",
        number: "04",
        area: "Surrey",
        complement: ""
      })
      .expect(200)
      done();
  })

})
