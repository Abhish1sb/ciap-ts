import { Injectable } from '@nestjs/common';

@Injectable()
export class ActionsService {
    executeAction(actionType: string, params: any) {
        return `Executing action ${actionType}`;
    }
}
