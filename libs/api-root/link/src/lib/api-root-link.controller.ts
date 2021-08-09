import { Controller } from '@nestjs/common';
import { ApiRootLinkService } from './api-root-link.service';

@Controller('api-root-link')
export class ApiRootLinkController {
  constructor(private apiRootLinkService: ApiRootLinkService) {}
}
