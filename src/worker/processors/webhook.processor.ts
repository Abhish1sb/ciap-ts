import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookProcessor {
    process(job: any) {
        console.log('Processing webhook job');
    }
}
