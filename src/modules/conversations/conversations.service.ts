import { Injectable } from '@nestjs/common';
import { CreateConversationDto } from './conversations.dto';

@Injectable()
export class ConversationsService {
    create(createConversationDto: CreateConversationDto) {
        return 'This action adds a new conversation';
    }

    findOne(id: string) {
        return `This action returns a #${id} conversation`;
    }
}
