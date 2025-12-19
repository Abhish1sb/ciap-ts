export class ConfigService {
    get(key: string): string {
        return process.env[key] || '';
    }
}
