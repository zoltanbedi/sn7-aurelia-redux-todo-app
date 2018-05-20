import { autoinject } from 'aurelia-framework';
import { NavigationInstruction, Next, PipelineStep, Redirect } from 'aurelia-router';
import { AuthService } from 'resources/services/auth-service';

@autoinject
export class SnClientAuthorizeStep implements PipelineStep {

  constructor(private authService: AuthService) {
  }

  public run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
    const instructions = navigationInstruction.getAllInstructions();

    if (instructions.some(route => route.config.settings.auth)) {
      if (!this.authService.isAuthenticated) {
        return next.cancel(new Redirect('login'));
      }
    }
    // Don't let user visit login page when authenticated
    if (this.authService.isAuthenticated && navigationInstruction.fragment === '/login') {
      return next.cancel();
    }
    return next();
  }
}
