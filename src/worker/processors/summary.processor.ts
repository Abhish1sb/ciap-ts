import { Injectable } from '@nestjs/common';

@Injectable()
export class SummaryProcessor {
    process(job: any) {
        console.log('Processing summary job');
    }
}
