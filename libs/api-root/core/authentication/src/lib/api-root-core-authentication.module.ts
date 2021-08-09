import { Module } from '@nestjs/common';
import { ApiRootCoreAuthenticationController } from './api-root-core-authentication.controller';
import { ApiRootCoreAuthenticationService } from './api-root-core-authentication.service';

@Module({
  controllers: [ApiRootCoreAuthenticationController],
  providers: [ApiRootCoreAuthenticationService],
  exports: [ApiRootCoreAuthenticationService],
})
export class ApiRootCoreAuthenticationModule {}
