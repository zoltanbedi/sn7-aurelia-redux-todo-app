import { autoinject, bindable, customElement } from 'aurelia-framework';
import { Store } from 'redux';

@autoinject
export class Todo {
  @bindable todo;

  private todoClass: string;

  constructor(private todoStore: Store<any>) {
  }

  attached() {
    this.todo.completed = this.todo.Status.indexOf('completed') > -1 ? true : false;
    this.todoClass = this.todo.completed ? 'completed' : '';
  }

  complete() {
    const status = this.todo.completed ? 'completed' : 'active';
    // this.todoStore.dispatch(Actions.UpdateContent(this.todo.Id, { Status: status }));
  }

  delete() {
    // this.todoStore.dispatch(Actions.Delete(this.todo.Id, true));
  }

}
