import express from 'express';
import socketio, { Socket } from 'socket.io';
import http from 'http';
import path from 'path';

const app = express();

//Desacoplar o servidor web do servidor socket. O servidor web ultiliza o protocolo HTTP 
//enquanto o servidor socket ultiliza o WebSockets
const httpServer = http.createServer(app)
const io = new socketio.Server(httpServer);

//Para carregar o html junto quando o servidor node subir
app.use(express.static(path.resolve(__dirname, '..', 'public')))

//Cada console terá um id diferente
io.on('connection', (socket) => {
    console.log(`new connections: ${socket.id}`);

    socket.on('message', message => {
        socket.emit('received', `Received message ${message}`)
        //io é o servidor
        //socket é quem está conectado no caso quem recebe a mensagem      
    })
})

//input output nao bloqueante (usa a mesma request em )

//Quanto o http quanto o websocket estará ouvindo no mesmo endereço
httpServer.listen(3333);