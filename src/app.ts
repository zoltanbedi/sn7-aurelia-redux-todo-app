import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      {
        route: [''],
        name: 'index',
        moduleId: 'index',
        title: 'SN7 Aurelia Redux Todo App'
      }
    ]);

    this.router = router;
  }
}
