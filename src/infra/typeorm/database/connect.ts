import { Connection, createConnection } from 'typeorm';
import { run } from "../../typeorm/entities/repository/tutorRepository"
import { tutors } from '../models/Tutors-model';
import { test } from '../../typeorm/models/Tutor-validator';

createConnection().then(async Connection => {
    Connection.getRepository(tutors);

    console.log(run);
    console.log(test);


});