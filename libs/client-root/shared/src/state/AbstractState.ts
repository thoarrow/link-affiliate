import { makeVar, ReactiveVar } from '@apollo/client';

export abstract class AbstractState<S> {
  private readonly state: ReactiveVar<S>;

  constructor() {
    this.state = makeVar<S>(this.initializeState());
  }

  protected abstract initializeState(): S;

  public setStateValue(value: Partial<S>): void {
    this.state({ ...this.state(), ...value });
  }

  public getStateValue(): S {
    return this.state();
  }

  public getState(): ReactiveVar<S> {
    return this.state;
  }

  public resetState(): void {
    this.state({ ...this.initializeState() });
  }
}
