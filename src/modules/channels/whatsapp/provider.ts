import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappProvider {
    handleIncomingMessage(data: any) {
        console.log('Handling incoming WhatsApp message');
        return { status: 'ok' };
    }
}
