import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {
    createTag(name: string) {
        return `Tag ${name} created`;
    }
}
