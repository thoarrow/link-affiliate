import { Module } from '@nestjs/common';
import { ApiRootCoreConfigurationController } from './api-root-core-configuration.controller';
import { ApiRootCoreConfigurationService } from './api-root-core-configuration.service';

@Module({
  controllers: [ApiRootCoreConfigurationController],
  providers: [ApiRootCoreConfigurationService],
  exports: [ApiRootCoreConfigurationService],
})
export class ApiRootCoreConfigurationModule {}
