import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Evaluator } from './evaluator';

@Module({
    providers: [TagsService, Evaluator],
    exports: [TagsService],
})
export class TagsModule { }
