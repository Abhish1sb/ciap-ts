import { Injectable } from '@nestjs/common';

@Injectable()
export class Executor {
    run(command: string) {
        console.log(`Running command: ${command}`);
    }
}
