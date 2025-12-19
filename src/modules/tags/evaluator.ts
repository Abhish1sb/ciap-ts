import { Injectable } from '@nestjs/common';

@Injectable()
export class Evaluator {
    evaluateConditions(context: any, rules: any[]) {
        console.log('Evaluating specific conditions for tags');
        return true;
    }
}
