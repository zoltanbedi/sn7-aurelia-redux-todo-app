import { AureliaUX } from '@aurelia-ux/core';
import { LoginState, Repository } from '@sensenet/client-core';
import { Actions, Reducers } from '@sensenet/redux';
import { autoinject, computedFrom } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';
import { AuthService } from 'auth-service';
import { TodoStore } from 'store';
import { SnClientAuthorizeStep } from './resources/routing/sn-authorize-step';

@autoinject
export class App {
  router: Router;

  constructor(private readonly repository: Repository,
    private readonly auth: AuthService,
    private readonly store: TodoStore<{ sensenet: Reducers.SensenetStateType }>,
    private readonly ux: AureliaUX) {
    ux.design.primary = '#13a5ad';
    ux.design.accent = '#13a5ad';
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'SN7 Aurelia Todo app';
    config.addAuthorizeStep(SnClientAuthorizeStep);
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./home'), title: 'SN7 Aurelia Redux Todo App', settings: { show: true, auth: true }, nav: true },
      { route: ['login'], name: 'login', moduleId: PLATFORM.moduleName('./login/login'), title: 'Login', settings: { show: true }, nav: true }
    ]);
    config.fallbackRoute('/home');
  }

  logout() {
    this.store.dispatch(Actions.userLogout());
  }
}
