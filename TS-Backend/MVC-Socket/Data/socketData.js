export const socketData = `import type { Server, Socket } from 'socket.io';

export default function socketHandler(io : Server) : void {
    io.on('connection', (socket : Socket) => {
        console.log(\`New User Joined. id: \${socket.id}\`);

        socket.on('disconnect', (reason : string) => {
            console.log(\`User id: \${socket.id} disconnected.\`);
            console.log(\`Reason: \${reason}\`);
        });
    });
}`;