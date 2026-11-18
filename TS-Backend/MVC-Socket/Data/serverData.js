export const serverData = `import express from 'express';
import type { Express } from 'express';
import dotenv from 'dotenv';
import { createServer } from 'node:http';
import type { Server as HttpServer } from 'node:http';
import { Server } from 'socket.io';
import type { Server as SocketServer } from 'socket.io';
import routes from './routes/index.js';
import socketHandler from './sockets/index.js';

dotenv.config();

const app : Express = express();

const server : HttpServer = createServer(app);

const io : SocketServer = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(express.json());

app.use('/', routes);

socketHandler(io);

const PORT: number = Number(process.env.PORT) || 3000;

server.listen(PORT, (): void => {
    console.log(\`MVC Server with Socket.IO is live at Port: \${PORT}\`);
});`;