import { AureliaUX } from '@aurelia-ux/core';
import { LoginState, Repository } from '@sensenet/client-core';
import { Actions, Reducers } from '@sensenet/redux';
import { autoinject, computedFrom } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';
import { TodoStore } from 'store';
import { SnClientAuthorizeStep } from './resources/routing/sn-authorize-step';

export const ROLE_LOGGED_IN: string = 'ROLE_LOGGED_IN';
export const ROLE_VISITOR_ONLY: string = 'ROLE_VISITOR_ONLY';

@autoinject
export class App {
  router: Router;

  constructor(private readonly repository: Repository,
    private store: TodoStore<{ sensenet: Reducers.SensenetStateType }>,
    private readonly ux: AureliaUX) {
    ux.design.primary = '#13a5ad';
    ux.design.accent = '#13a5ad';
  }

  @computedFrom('store.sensenet.session.loginState')
  get isAuthenticated() {
    return (this.store.getState().sensenet.session as { loginState: LoginState }).loginState === LoginState.Authenticated;
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'SN7 Aurelia Todo app';
    config.addAuthorizeStep(SnClientAuthorizeStep);
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./home'), title: 'SN7 Aurelia Redux Todo App', settings: { show: true, roles: [ROLE_LOGGED_IN] }, nav: true },
      { route: ['login'], name: 'login', moduleId: PLATFORM.moduleName('./login/login'), title: 'Login', settings: { show: true, roles: [ROLE_VISITOR_ONLY] }, nav: true }
    ]);
    config.fallbackRoute('home');
  }

  attached() {
    console.log((this.store.getState().sensenet.session as { loginState: LoginState }).loginState);
    this.repository.authentication.state.subscribe(state => {
      this.router.routes.filter(route => route.settings.roles.indexOf(ROLE_LOGGED_IN) > -1)
        .forEach(route => {
          route.settings.show = state === LoginState.Authenticated;
        });
      this.router.routes.filter(route => route.settings.roles.indexOf(ROLE_VISITOR_ONLY) > -1)
        .forEach(route => {
          route.settings.show = state === LoginState.Unauthenticated;
        });
      if (state === LoginState.Unauthenticated) {
        this.router.navigate('/login');
      }
    });
  }

  logout() {
    this.store.dispatch(Actions.userLogout());
  }
}
