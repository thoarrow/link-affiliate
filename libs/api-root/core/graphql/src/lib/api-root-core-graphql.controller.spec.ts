import { Test } from '@nestjs/testing';
import { ApiRootCoreGraphqlController } from './api-root-core-graphql.controller';
import { ApiRootCoreGraphqlService } from './api-root-core-graphql.service';

describe('ApiRootCoreGraphqlController', () => {
  let controller: ApiRootCoreGraphqlController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiRootCoreGraphqlService],
      controllers: [ApiRootCoreGraphqlController],
    }).compile();

    controller = module.get(ApiRootCoreGraphqlController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
