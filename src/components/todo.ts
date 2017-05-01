import { customElement, bindable } from 'aurelia-framework';
import { reduxStore } from '../store';
import { Actions, Store } from 'sn-redux';

@customElement('todo')
export class Todo {
  @bindable todo;

  private todoClass: string;
  private todoStore = reduxStore;

  attached() {
    this.todo.completed = this.todo.Status.indexOf('completed') > -1 ? true : false;
    this.todoClass = this.todo.completed ? 'completed' : '';
  }

  complete(index) {
    const status = this.todo.completed ? 'completed' : 'active';
    this.todoStore.dispatch(Actions.UpdateContent(this.todo.Id, { Status: status }));
  }

  delete() {
    this.todoStore.dispatch(Actions.Delete(this.todo.Id, true));
  }

}
