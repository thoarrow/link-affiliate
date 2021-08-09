import { Test } from '@nestjs/testing';
import { ApiRootCoreGraphqlService } from './api-root-core-graphql.service';

describe('ApiRootCoreGraphqlService', () => {
  let service: ApiRootCoreGraphqlService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiRootCoreGraphqlService],
    }).compile();

    service = module.get(ApiRootCoreGraphqlService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
