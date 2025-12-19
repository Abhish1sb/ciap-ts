// src/modules/channels/whatsapp/whatsapp.controller.ts
import { Body, Controller, Post } from "@nestjs/common";
import { ConversationOrchestrator } from "../../conversations/orchestrator";

@Controller("/v1/channels/whatsapp")
export class WhatsAppController {
    constructor(private readonly orch: ConversationOrchestrator) { }

    @Post("/webhook")
    async inbound(@Body() body: any) {
        // TODO: map provider payload to normalized event
        const tenantId = body.tenantId;
        const conversationId = body.conversationId;
        const sessionId = body.sessionId;
        const text = body.text;

        const res = await this.orch.handleTurn({
            tenantId,
            channel: "whatsapp",
            conversationId,
            sessionId,
            customerText: text,
            snapshot: {},
        });

        // TODO: send reply via provider
        return { replyText: res.replyText, shouldHandoffHuman: res.shouldHandoffHuman ?? false };
    }
}
