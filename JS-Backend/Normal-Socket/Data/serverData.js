const serverData = `import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

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

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the server with Socket.IO!</h1>');
});

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(\`Server is live at Port: \${PORT}\`);
});`;

export default serverData;