import { AbstractState } from '../../../shared/src/state/AbstractState';

export interface LoginUserStateProps {
  id: string;
  email: string;
}

export class LoginUserState extends AbstractState<LoginUserStateProps> {
  private static instance: LoginUserState;

  public static getInstance(): LoginUserState {
    if (!this.instance) {
      this.instance = new LoginUserState();
    }

    return this.instance;
  }

  protected initializeState(): LoginUserStateProps {
    return {
      id: '',
      email: '',
    };
  }
}
