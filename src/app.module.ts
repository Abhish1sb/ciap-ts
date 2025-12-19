import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { TenantsModule } from './modules/tenants/tenants.module';
// import { FlowsModule } from './modules/flows/flows.module';
// ... other imports

@Module({
    imports: [
        // TenantsModule,
        // FlowsModule,
        // ...
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule { }
