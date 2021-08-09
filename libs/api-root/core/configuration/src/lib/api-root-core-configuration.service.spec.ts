import { Test } from '@nestjs/testing';
import { ApiRootCoreConfigurationService } from './api-root-core-configuration.service';

describe('ApiRootCoreConfigurationService', () => {
  let service: ApiRootCoreConfigurationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiRootCoreConfigurationService],
    }).compile();

    service = module.get(ApiRootCoreConfigurationService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
