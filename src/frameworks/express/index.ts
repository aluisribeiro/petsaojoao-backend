import express from 'express';
import { Tutor } from '../../app/core/entities/tutor';

const app = express();

app.get('/', (req, res) => {
    const tutor = new Tutor('Maria');
    return res.send(`Hi ${tutor.name}`);
})

app.listen(3333);