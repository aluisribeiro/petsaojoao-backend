import 'reflect-metadata';
import bodyParser from 'body-parser';
import express from 'express';
import '../../infra/typeorm/database/connect';
import { Tutor } from '../../core/entities/tutor';
import routes from './routes';
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send(`Hi Anderson`);
})
app.use(routes);
app.listen(3333);