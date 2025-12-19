import { Injectable } from '@nestjs/common';

@Injectable()
export class ActionsProcessor {
    process(job: any) {
        console.log('Processing actions job');
    }
}
