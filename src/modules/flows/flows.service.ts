import { Injectable } from '@nestjs/common';
import { CreateFlowDto } from './flows.dto';

@Injectable()
export class FlowsService {
    create(createFlowDto: CreateFlowDto) {
        return 'This action adds a new flow';
    }

    findAll() {
        return 'This action returns all flows';
    }
}
