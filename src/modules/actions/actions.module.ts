import { Module } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { Executor } from './executor';

@Module({
    providers: [ActionsService, Executor],
    exports: [ActionsService],
})
export class ActionsModule { }
