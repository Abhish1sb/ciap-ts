import { Module } from '@nestjs/common';
import { EmergencyProcessor } from './processors/emergency.processor';
import { WebhookProcessor } from './processors/webhook.processor';

@Module({
    providers: [EmergencyProcessor, WebhookProcessor],
})
export class WorkerModule { }
