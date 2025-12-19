// src/modules/conversations/orchestrator.ts
import { Injectable } from "@nestjs/common";
import { highQueue, JobPayload } from "../../worker/queues";

export interface OrchestratorResponse {
    replyText: string;
    shouldHandoffHuman?: boolean;
    channelPayload?: Record<string, any>;
}

@Injectable()
export class ConversationOrchestrator {
    detectEmergency(text: string): boolean {
        const lowered = text.toLowerCase();
        const triggers = [
            "unconscious",
            "heart attack",
            "stroke",
            "not breathing",
            "severe bleeding",
            "ambulance",
            "emergency",
        ];
        return triggers.some((t) => lowered.includes(t));
    }

    async handleTurn(args: {
        tenantId: string;
        channel: "call" | "whatsapp";
        conversationId: string;
        sessionId: string;
        customerText: string;
        snapshot: any;
    }): Promise<OrchestratorResponse> {
        if (this.detectEmergency(args.customerText)) {
            const payload: JobPayload = {
                tenantId: args.tenantId,
                conversationId: args.conversationId,
                sessionId: args.sessionId,
                type: "emergency_notify",
                data: {
                    sourceText: args.customerText,
                    actions: ["call_emergency_number", "notify_emergency_team", "deliver_webhook"],
                },
                idempotencyKey: `emergency:${args.conversationId}:${args.sessionId}`,
            };
            await highQueue.add("emergency_notify", payload, { removeOnComplete: true });

            return {
                replyText: "I am connecting you to our emergency team now. Please stay on the line.",
                shouldHandoffHuman: true,
            };
        }

        // TODO: flow engine execution
        return { replyText: "Thanks. How can I help you today?" };
    }
}
