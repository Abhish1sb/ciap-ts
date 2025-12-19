// src/worker/queues.ts
import { Queue } from "bullmq";

const connection = {
    host: process.env.REDIS_HOST || "redis",
    port: Number(process.env.REDIS_PORT || 6379),
};

export const defaultQueue = new Queue("default", { connection });
export const highQueue = new Queue("high", { connection });

export type JobType =
    | "send_sms"
    | "send_whatsapp"
    | "generate_summary"
    | "evaluate_tags"
    | "execute_actions"
    | "deliver_webhook"
    | "emergency_notify";

export interface JobPayload {
    tenantId: string;
    conversationId: string;
    sessionId: string;
    type: JobType;
    data: Record<string, any>;
    idempotencyKey?: string;
}
