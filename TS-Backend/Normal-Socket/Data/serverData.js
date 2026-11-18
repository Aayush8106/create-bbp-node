export const tsServerData = `import express from 'express';
import type { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import type { Server as HttpServer } from 'node:http';

dotenv.config();

const app : Express = express();
const server : HttpServer = createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(express.json());

app.get('/', (req : Request , res : Response) => {
    res.send('<h1>Welcome to the TypeScript backend with Socket.IO!</h1>');
});

io.on('connection', (socket) => {

    console.log(\`New User Joined. id: \${socket.id}\`);

    socket.on('disconnect', (reason) => {
        console.log(\`User id: \${socket.id} disconnected.\`);
        console.log(\`Reason: \${reason}\`);
    });
});

const PORT : number = Number(process.env.PORT) || 3000;

server.listen(PORT, () => {
    console.log(\`Server is live at Port: \${PORT}\`);
});`;