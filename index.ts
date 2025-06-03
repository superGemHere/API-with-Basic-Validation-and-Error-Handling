import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
    res.send('Simple CRUD API with Express and TypeScript from superGem');
});

app.use(routes);


app.listen(port, () => {
    console.log(`🟢 Server is running on http://localhost:${port}`);
});
