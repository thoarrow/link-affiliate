import { Test } from '@nestjs/testing';
import { ApiRootLinkService } from './api-root-link.service';

describe('ApiRootLinkService', () => {
  let service: ApiRootLinkService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiRootLinkService],
    }).compile();

    service = module.get(ApiRootLinkService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
