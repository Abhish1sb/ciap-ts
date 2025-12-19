import { Module } from '@nestjs/common';
import { FlowsController } from './flows.controller';
import { FlowsService } from './flows.service';
import { FlowEngine } from './flow-engine';

@Module({
    controllers: [FlowsController],
    providers: [FlowsService, FlowEngine],
    exports: [FlowsService],
})
export class FlowsModule { }
