import { PLATFORM } from 'aurelia-pal';
import { AureliaUX } from 'aurelia-ux';
import { autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { Repository, Authentication } from "sn-client-js";
import { SnClientAuthorizeStep } from "./resources/routing/sn-authorize-step";

export const ROLE_LOGGED_IN: string = 'ROLE_LOGGED_IN';
export const ROLE_VISITOR_ONLY: string = 'ROLE_VISITOR_ONLY';

@autoinject
export class App {
  router: any;

  constructor(private readonly snService: Repository.BaseRepository, 
    private readonly ux: AureliaUX) {
      ux.design.primary = '#13a5ad';
      ux.design.accent = '#13a5ad';
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'SN7 Aurelia Todo app';
    config.addAuthorizeStep(SnClientAuthorizeStep);
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: PLATFORM.moduleName('./welcome'), title: 'Welcome', settings: { show: true, roles: [] }, nav: true },
      { route: ['login'], name: 'login', moduleId: PLATFORM.moduleName('./login/login'), title: 'Login', settings: { show: true, roles: [ROLE_VISITOR_ONLY] }, nav: true },
      { route: 'users', name: 'users', moduleId: PLATFORM.moduleName('./users'), title: 'Github Users', settings: { show: true, roles: [ROLE_LOGGED_IN] }, nav: true }
    ]);

    this.router = router;
  }

  attached() {
    this.snService.Authentication.State.subscribe(state => {
      this.router.routes.filter(route => route.settings.roles.indexOf(ROLE_LOGGED_IN) > -1)
        .forEach(route => {
          route.settings.show = state === Authentication.LoginState.Authenticated;
        });
      this.router.routes.filter(route => route.settings.roles.indexOf(ROLE_VISITOR_ONLY) > -1)
        .forEach(route => {
          route.settings.show = state === Authentication.LoginState.Unauthenticated;
        })
    })
  }
}
