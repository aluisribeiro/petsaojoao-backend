import express from 'express';
import { Tutor } from '../../app/core/entities/tutor';

const app = express();

app.get('/', (req, res) => {
    return res.send(`Hi Anderson`);
})

app.listen(3333);