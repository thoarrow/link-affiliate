import { Module } from '@nestjs/common';
import { ApiRootLinkController } from './api-root-link.controller';
import { ApiRootLinkService } from './api-root-link.service';

@Module({
  controllers: [ApiRootLinkController],
  providers: [ApiRootLinkService],
  exports: [ApiRootLinkService],
})
export class ApiRootLinkModule {}
