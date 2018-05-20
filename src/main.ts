import { JwtService } from '@sensenet/authentication-jwt';
import { Repository } from '@sensenet/client-core';
import { Reducers, Store } from '@sensenet/redux';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';
import { combineReducers } from 'redux';
import 'reset-css';
import { TodoStore } from 'store';
import environment from './environment';
import { listByFilter } from './reducers/filtering';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))
    .plugin(PLATFORM.moduleName('aurelia-validation'))
    .plugin(PLATFORM.moduleName('@aurelia-ux/core'))
    .plugin(PLATFORM.moduleName('@aurelia-ux/components'))
    .plugin(PLATFORM.moduleName('@aurelia-ux/icons'));

  const repository = new Repository({
    repositoryUrl: 'https://dmsservice.demo.sensenet.com',
    defaultSelect: 'all',
    requiredSelect: ['Id', 'Type', 'Path', 'Name'],
    defaultExpand: [],
    defaultTop: 1000
  });
  const jwtService = new JwtService(repository);

  aurelia.container.registerSingleton(Repository, () => repository);

  aurelia.container.registerSingleton(TodoStore, () => Store.createSensenetStore({
    repository,
    rootReducer: combineReducers({
      sensenet: Reducers.sensenet,
      listByFilter
    })
  }));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
