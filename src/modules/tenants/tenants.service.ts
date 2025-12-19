import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './tenants.dto';

@Injectable()
export class TenantsService {
    private tenants = [];

    create(createTenantDto: CreateTenantDto) {
        this.tenants.push(createTenantDto);
        return 'This action adds a new tenant';
    }

    findAll() {
        return this.tenants;
    }
}
