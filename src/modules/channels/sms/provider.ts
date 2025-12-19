import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsProvider {
    sendSms(to: string, message: string) {
        console.log(`Sending SMS to ${to}: ${message}`);
    }
}
