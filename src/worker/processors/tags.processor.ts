import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsProcessor {
    process(job: any) {
        console.log('Processing tags job');
    }
}
