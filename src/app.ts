import { AureliaUX } from '@aurelia-ux/core';
import { Actions, Reducers } from '@sensenet/redux';
import { autoinject } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';
import { SnClientAuthorizeStep } from 'resources/routing/sn-authorize-step';
import { AuthService } from 'resources/services/auth-service';
import { TodoStore } from 'store';

@autoinject
export class App {

  constructor(
    private readonly auth: AuthService,
    private readonly store: TodoStore<{ sensenet: Reducers.SensenetStateType }>,
    private readonly ux: AureliaUX
  ) {
    ux.design.primary = '#13a5ad';
    ux.design.accent = '#13a5ad';
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'SN7 Aurelia Todo app';
    config.addAuthorizeStep(SnClientAuthorizeStep);
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./resources/components/home'), title: 'SN7 Aurelia Redux Todo App', settings: { show: true, auth: true }, nav: true },
      { route: ['login'], name: 'login', moduleId: PLATFORM.moduleName('./resources/components/login'), title: 'Login', settings: { show: true }, nav: true }
    ]);
    config.fallbackRoute('/home');
  }

  logout() {
    this.store.dispatch(Actions.userLogout());
  }
}
