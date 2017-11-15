import { autoinject } from "aurelia-framework";
import { Authentication, Repository } from "sn-client-js";
import { PipelineStep, NavigationInstruction, Next, Redirect } from "aurelia-router";
import { ROLE_LOGGED_IN, ROLE_VISITOR_ONLY } from "../../app";

@autoinject
export class SnClientAuthorizeStep implements PipelineStep {

  constructor(private snService: Repository.BaseRepository<any, any>) { 
    console.log(this.snService);
  }

  public run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
    const instructions = navigationInstruction.getAllInstructions();
    const authenticationState = this.snService.Authentication.CurrentState;

    if (instructions.some(i => i.config.settings.roles.indexOf(ROLE_LOGGED_IN) !== -1)) {
      if (authenticationState !== Authentication.LoginState.Authenticated) {
        return next.cancel(new Redirect('login'));
      }
    }
    if (instructions.some(i => i.config.settings.roles.indexOf(ROLE_VISITOR_ONLY) !== -1)) {
      if (authenticationState !== Authentication.LoginState.Unauthenticated) {
        return next.cancel();
      }
    }
    return next();
  }
}
