import { Module } from '@nestjs/common';
import { ConversationsController } from './conversations.controller';
import { ConversationsService } from './conversations.service';
import { ConversationOrchestrator } from './orchestrator';

@Module({
    controllers: [ConversationsController],
    providers: [ConversationsService, ConversationOrchestrator],
    exports: [ConversationsService, ConversationOrchestrator],
})
export class ConversationsModule { }
