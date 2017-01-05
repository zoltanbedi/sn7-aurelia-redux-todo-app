import {customElement, bindable} from 'aurelia-framework';

@customElement('todo-add')
export class TodoAdd {
  private input: string;
  @bindable addCallback;

  submit() {
    this.addCallback(this.input);
    this.input = '';
  }
}
