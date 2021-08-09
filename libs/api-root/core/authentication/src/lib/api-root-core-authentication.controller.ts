import { Controller } from '@nestjs/common';
import { ApiRootCoreAuthenticationService } from './api-root-core-authentication.service';

@Controller('api-root-core-authentication')
export class ApiRootCoreAuthenticationController {
  constructor(
    private apiRootCoreAuthenticationService: ApiRootCoreAuthenticationService
  ) {}
}
