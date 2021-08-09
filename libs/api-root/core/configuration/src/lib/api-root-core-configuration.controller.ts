import { Controller } from '@nestjs/common';
import { ApiRootCoreConfigurationService } from './api-root-core-configuration.service';

@Controller('api-root-core-configuration')
export class ApiRootCoreConfigurationController {
  constructor(
    private apiRootCoreConfigurationService: ApiRootCoreConfigurationService
  ) {}
}
