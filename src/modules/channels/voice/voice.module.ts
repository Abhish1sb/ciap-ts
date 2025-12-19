import { Module } from '@nestjs/common';
import { VoiceController } from './voice.controller';
import { VoiceProvider } from './provider';

@Module({
    controllers: [VoiceController],
    providers: [VoiceProvider],
})
export class VoiceModule { }
