import { Controller, Get, Post, Body } from '@nestjs/common';
import { FlowsService } from './flows.service';
import { CreateFlowDto } from './flows.dto';

@Controller('flows')
export class FlowsController {
    constructor(private readonly flowsService: FlowsService) { }

    @Post()
    create(@Body() createFlowDto: CreateFlowDto) {
        return this.flowsService.create(createFlowDto);
    }

    @Get()
    findAll() {
        return this.flowsService.findAll();
    }
}
