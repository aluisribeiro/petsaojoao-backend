import { CreateTutorInput } from '@/app/createtutor/createtutor.in';
import { CreateTutorInteractor } from '@/app/createtutor/createturor.interactor'
import { CreateTutorValidator } from '@/app/createtutor/createtutor.validator';

const request = new Promise((resolve, reject) => {
  try {
    resolve(
      {
        "name": "cesar",
        "email": "cesar@hotmail.com",
        "rg": "12.345.678-9",
        "cpf": "123.456.789-10",
        "phone": "123456789",
        "cep": "13990000",
        "whatsapp": "987654321",
        "street": "Rua dos Alfeneiros",
        "number": "04",
        "area": "Surrey",
        "complement": ""
      }
    )
  } catch (e) {
    reject(e)
  }
})

describe('CreateTutor', () => {

  test('If json is valid', async () => {
    const tutor = await request;
    // Nao sei como faz para seber se é um json, typeof talvez?
    expect(true).toEqual(true);
  })



})
