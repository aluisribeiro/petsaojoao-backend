import { getRepository, Repository } from "typeorm";
import { Tutor } from "../tutor";

export let run = async () => {
    const userRepository = getRepository(Tutor);
    const tutors1 = await userRepository.insert({
        name: "anderson",
        email: "anderson@anderson",
        rg: "11111111111",
        cpf: "22222222222",
        phone: "123456789",
        cep: "12345678",
        whatsapp: "",
        street: "rua do anderson",
        number: "123",
        area: "bairro do anderson",
        complement: ""


    });
    await Repository.bind(tutors1);



}



