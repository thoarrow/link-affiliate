import { Module } from '@nestjs/common';
import { ApiRootCoreGraphqlController } from './api-root-core-graphql.controller';
import { ApiRootCoreGraphqlService } from './api-root-core-graphql.service';

@Module({
  controllers: [ApiRootCoreGraphqlController],
  providers: [ApiRootCoreGraphqlService],
  exports: [ApiRootCoreGraphqlService],
})
export class ApiRootCoreGraphqlModule {}
