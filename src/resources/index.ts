import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./components/todo-add'),
    PLATFORM.moduleName('./components/todo'),
    PLATFORM.moduleName('./components/todo-list.html'),
    PLATFORM.moduleName('./components/todo-footer.html')
  ]);
}
