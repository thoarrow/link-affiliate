import { Test } from '@nestjs/testing';
import { ApiRootCoreAuthenticationController } from './api-root-core-authentication.controller';
import { ApiRootCoreAuthenticationService } from './api-root-core-authentication.service';

describe('ApiRootCoreAuthenticationController', () => {
  let controller: ApiRootCoreAuthenticationController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiRootCoreAuthenticationService],
      controllers: [ApiRootCoreAuthenticationController],
    }).compile();

    controller = module.get(ApiRootCoreAuthenticationController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
