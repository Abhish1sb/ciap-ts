import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowEngine {
    executeFlow(flowId: string, context: any) {
        // Logic to execute flow
        console.log(`Executing flow ${flowId}`);
    }
}
