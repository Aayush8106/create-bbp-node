export const serverData = `import express, { Express , Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app : Express = express();

app.use(express.json());

app.get('/', (req : Request , res : Response) => {
    res.send('<h1>Welcome to the TypeScript backend!</h1>');
});

const PORT : number = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
    console.log(\`Server is live at Port: \${PORT}\`);
});`;

export default serverData;