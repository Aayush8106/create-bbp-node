export const mvcServerData = `import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import routes from './routes/index.js';
import socketHandler from './socket/index.js';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

dotenv.config();

app.use(express.json());
app.use('/', routes);

socketHandler(io);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(\`Server is live at Port: \${PORT}\`);
});`;