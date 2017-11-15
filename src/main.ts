/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
import '../static/styles/styles.css';
import { Aurelia } from 'aurelia-framework';
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
import { Repository } from "sn-client-js";
import * as Bluebird from 'bluebird';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))
    .plugin(PLATFORM.moduleName('aurelia-validation'))
    .plugin(PLATFORM.moduleName('aurelia-ux'));

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));
  aurelia.container.registerSingleton(Repository.BaseRepository, () => new Repository.SnRepository({
    RepositoryUrl: 'https://manatee.sensenet.com/',
    ODataToken: 'OData.svc',
    JwtTokenKeyTemplate: 'my-${tokenName}-token-for-${siteName}',
    JwtTokenPersist: 'session',
    DefaultSelect: ['DisplayName', 'Icon'],
    RequiredSelect: ['Id', 'Type', 'Path', 'Name'],
    DefaultMetadata: 'no',
    DefaultInlineCount: 'allpages',
    DefaultExpand: [],
    DefaultTop: 1000
  }));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
