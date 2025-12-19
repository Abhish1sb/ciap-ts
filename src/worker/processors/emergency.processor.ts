// src/worker/processors/emergency.processor.ts
import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";
import { JobPayload } from "../queues";

@Processor("high")
export class EmergencyProcessor extends WorkerHost {
    async process(job: Job<JobPayload>) {
        if (job.data.type !== "emergency_notify") return;

        // TODO:
        // A) call emergency number (provider integration)
        // B) notify emergency team via WhatsApp/SMS
        // C) deliver webhook with retries tracked
        return { status: "ok", mode: "A+B+webhook" };
    }
}
