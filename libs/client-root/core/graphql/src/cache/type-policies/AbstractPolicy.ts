import { TypePolicies } from '@apollo/client/cache/inmemory/policies';

export class AbstractPolicy {
  protected typePolicies!: TypePolicies;

  public getTypePolicies(): TypePolicies {
    return this.typePolicies;
  }
}
