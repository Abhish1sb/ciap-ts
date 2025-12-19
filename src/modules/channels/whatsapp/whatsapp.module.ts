import { Module } from '@nestjs/common';
import { ConversationsModule } from '../../conversations/conversations.module';
import { WhatsAppController } from './whatsapp.controller';
import { WhatsappProvider } from './provider';

@Module({
    imports: [ConversationsModule],
    controllers: [WhatsAppController],
    providers: [WhatsappProvider],
})
export class WhatsappModule { }
