import { AureliaUX } from '@aurelia-ux/core';
import { LoginState, Repository } from '@sensenet/client-core';
import { autoinject } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';
import { SnClientAuthorizeStep } from './resources/routing/sn-authorize-step';

export const ROLE_LOGGED_IN: string = 'ROLE_LOGGED_IN';
export const ROLE_VISITOR_ONLY: string = 'ROLE_VISITOR_ONLY';

@autoinject
export class App {
  router: Router;

  constructor(private readonly repository: Repository,
    private readonly ux: AureliaUX) {
    ux.design.primary = '#13a5ad';
    ux.design.accent = '#13a5ad';
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'SN7 Aurelia Todo app';
    config.addAuthorizeStep(SnClientAuthorizeStep);
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./home'), title: 'SN7 Aurelia Redux Todo App', settings: { show: true, roles: [ROLE_LOGGED_IN] }, nav: true },
      { route: ['login'], name: 'login', moduleId: PLATFORM.moduleName('./login/login'), title: 'Login', settings: { show: true, roles: [ROLE_VISITOR_ONLY] }, nav: true }
    ]);

    this.router = router;
  }

  attached() {
    this.repository.authentication.state.subscribe(state => {
      this.router.routes.filter(route => route.settings.roles.indexOf(ROLE_LOGGED_IN) > -1)
        .forEach(route => {
          route.settings.show = state === LoginState.Authenticated;
        });
      this.router.routes.filter(route => route.settings.roles.indexOf(ROLE_VISITOR_ONLY) > -1)
        .forEach(route => {
          route.settings.show = state === LoginState.Unauthenticated;
        });
    });
  }
}
