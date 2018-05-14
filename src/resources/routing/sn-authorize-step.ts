import { LoginState, Repository } from '@sensenet/client-core';
import { autoinject } from 'aurelia-framework';
import { NavigationInstruction, Next, PipelineStep, Redirect } from 'aurelia-router';
import { ROLE_LOGGED_IN, ROLE_VISITOR_ONLY } from '../../app';

@autoinject
export class SnClientAuthorizeStep implements PipelineStep {

  constructor(private repository: Repository) {
  }

  public run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
    const instructions = navigationInstruction.getAllInstructions();
    const authenticationState = this.repository.authentication.state.getValue();

    if (instructions.some(i => i.config.settings.roles.indexOf(ROLE_LOGGED_IN) !== -1)) {
      if (authenticationState !== LoginState.Authenticated) {
        return next.cancel(new Redirect('login'));
      }
    }
    if (instructions.some(i => i.config.settings.roles.indexOf(ROLE_VISITOR_ONLY) !== -1)) {
      if (authenticationState !== LoginState.Unauthenticated && authenticationState !== LoginState.Unknown) {
        return next.cancel();
      }
    }
    return next();
  }
}
