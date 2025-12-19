import { LoggerService } from '@nestjs/common';

export class AppLogger implements LoggerService {
    log(message: any, ...optionalParams: any[]) {
        console.log(message, ...optionalParams);
    }
    error(message: any, ...optionalParams: any[]) {
        console.error(message, ...optionalParams);
    }
    warn(message: any, ...optionalParams: any[]) {
        console.warn(message, ...optionalParams);
    }
}
