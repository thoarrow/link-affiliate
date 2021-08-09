import { Test } from '@nestjs/testing';
import { ApiRootCoreConfigurationController } from './api-root-core-configuration.controller';
import { ApiRootCoreConfigurationService } from './api-root-core-configuration.service';

describe('ApiRootCoreConfigurationController', () => {
  let controller: ApiRootCoreConfigurationController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiRootCoreConfigurationService],
      controllers: [ApiRootCoreConfigurationController],
    }).compile();

    controller = module.get(ApiRootCoreConfigurationController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
