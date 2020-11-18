import { getManager } from "typeorm";
import { validate } from "class-validator";
import Tutor from "./Tutors-model";

let post = new Tutor();
post.name = "Vinicius"; // should not pass
post.email = "this is a great post about hell world"; // should not pass
post.rg = 123; // should not pass
post.cpf = "google.com"; // should not pass
post.phone = "111"; // should not pass
post.cep = "123";
post.whatsapp = "";
post.street = "asda";
post.number = "";
post.area = "";
post.complement = "";

export let test = async () => {
    const errors = await validate(post);
    if (errors.length > 0) {
        throw new Error(`Validation failed!`);
    } else {
        await getManager().save(post);
    }

}

