import express from 'express';
import { PORT } from './constants';
import router from './router';

const app = express();

app.use((req:Request, res:Response, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json());

app.use(router);

app.listen(PORT);