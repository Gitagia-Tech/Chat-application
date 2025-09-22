import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*', // allow all origins (adjust in production)
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  // When client sends "message" event
  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ): void {
    console.log(`Message from ${client.id}: ${message}`);
    // broadcast to all clients
    this.server.emit('message', { sender: client.id, text: message });
  }

  // Handle new connections
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    this.server.emit('message', {
      sender: 'System',
      text: `User ${client.id} joined the chat`,
    });
  }

  // Handle disconnections
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.server.emit('message', {
      sender: 'System',
      text: `User ${client.id} left the chat`,
    });
  }
}
  