import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsProcessor {
    process(job: any) {
        console.log('Processing SMS job');
    }
}
