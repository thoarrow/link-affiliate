import { Test } from '@nestjs/testing';
import { ApiRootCoreAuthenticationService } from './api-root-core-authentication.service';

describe('ApiRootCoreAuthenticationService', () => {
  let service: ApiRootCoreAuthenticationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiRootCoreAuthenticationService],
    }).compile();

    service = module.get(ApiRootCoreAuthenticationService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
