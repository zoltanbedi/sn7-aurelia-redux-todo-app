import { LoginState, Repository } from '@sensenet/client-core';
import { autoinject } from 'aurelia-framework';
import { NavigationInstruction, Next, PipelineStep, Redirect } from 'aurelia-router';

@autoinject
export class SnClientAuthorizeStep implements PipelineStep {

  loginState: LoginState;
  constructor(private repository: Repository) {
    this.repository.authentication.state.subscribe(state => this.loginState = state);
  }

  public run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
    const instructions = navigationInstruction.getAllInstructions();

    if (!this.loginState) {
      this.loginState = this.repository.authentication.state.getValue();
    }
    if (instructions.some(route => route.config.settings.auth)) {
      if (this.loginState !== LoginState.Authenticated) {
        return next.cancel(new Redirect('login'));
      }
    }
    if (this.loginState === LoginState.Authenticated && navigationInstruction.fragment === '/login') {
      return next.cancel();
    }
    return next();
  }
}
