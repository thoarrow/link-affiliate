import { Test } from '@nestjs/testing';
import { ApiRootLinkController } from './api-root-link.controller';
import { ApiRootLinkService } from './api-root-link.service';

describe('ApiRootLinkController', () => {
  let controller: ApiRootLinkController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiRootLinkService],
      controllers: [ApiRootLinkController],
    }).compile();

    controller = module.get(ApiRootLinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
