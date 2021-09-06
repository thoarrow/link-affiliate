import { TypePolicies } from '@apollo/client/cache/inmemory/policies';

import Policies from './Policies';

export class RootPolicies {
  private static instance: RootPolicies;

  private typePolicies: TypePolicies;

  constructor() {
    this.typePolicies = {};
    Policies.forEach((instance) => {
      this.typePolicies = {
        ...this.typePolicies,
        ...instance.getTypePolicies(),
      };
    });
  }

  public static getInstance(): RootPolicies {
    if (!this.instance) {
      this.instance = new RootPolicies();
    }

    return this.instance;
  }

  public getTypePolicies(): TypePolicies {
    return this.typePolicies;
  }
}
