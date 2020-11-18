import { Connection, createConnection } from 'typeorm';
import { run } from "../../typeorm/entities/repository/tutorRepository"

createConnection().then(async Connection => {

    console.log(run);



});