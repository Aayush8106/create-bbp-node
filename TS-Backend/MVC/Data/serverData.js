export const tsMVCServerData = `import express from 'express';
import type { Express } from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();

const app : Express = express();

app.use(express.json());

app.use('/', routes);

const PORT : number = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
    console.log(\`MVC Server is live at Port: \${PORT}\`);
});`;