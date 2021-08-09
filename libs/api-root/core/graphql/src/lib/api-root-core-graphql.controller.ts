import { Controller } from '@nestjs/common';
import { ApiRootCoreGraphqlService } from './api-root-core-graphql.service';

@Controller('api-root-core-graphql')
export class ApiRootCoreGraphqlController {
  constructor(private apiRootCoreGraphqlService: ApiRootCoreGraphqlService) {}
}
