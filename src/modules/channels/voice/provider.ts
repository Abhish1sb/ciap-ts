import { Injectable } from '@nestjs/common';

@Injectable()
export class VoiceProvider {
    handleIncomingCall(data: any) {
        console.log('Handling incoming voice call');
        return { status: 'ok' };
    }
}
