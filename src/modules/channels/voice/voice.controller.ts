import { Controller, Post, Body } from '@nestjs/common';
import { VoiceProvider } from './provider';

@Controller('channels/voice')
export class VoiceController {
    constructor(private readonly voiceProvider: VoiceProvider) { }

    @Post('webhook')
    handleWebhook(@Body() body: any) {
        return this.voiceProvider.handleIncomingCall(body);
    }
}
