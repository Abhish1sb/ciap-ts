import { Injectable } from '@nestjs/common';

@Injectable()
export class TranscriptsService {
    saveTranscript(conversationId: string, content: string) {
        console.log(`Saving transcript for ${conversationId}`);
    }
}
