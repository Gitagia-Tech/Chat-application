import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';
import { GroupsModule } from './groups/groups.module';
import { MessagesModule } from './messages/messages.module';
import { RealtimeModule } from './realtime/realtime.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    UsersModule,
    ChatsModule,
    GroupsModule,
    MessagesModule,
    RealtimeModule,
    NotificationsModule,
  ],
})
export class AppModule {}

