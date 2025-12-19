import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhooksService {
    handleWebhook(payload: any) {
        console.log('Received webhook payload', payload);
    }
}
