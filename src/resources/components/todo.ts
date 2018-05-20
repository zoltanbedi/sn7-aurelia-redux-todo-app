import { Status, Task } from '@sensenet/default-content-types';
import { Actions } from '@sensenet/redux';
import { autoinject, bindable, computedFrom } from 'aurelia-framework';
import { TodoStore } from 'store';

@autoinject
export class Todo {
  @bindable todo: Task;

  isCompleted: boolean = false;

  constructor(private readonly todoStore: TodoStore<any>) {
  }

  attached() {
    this.isCompleted = this.todo.Status[0] === Status.completed;
  }

  complete() {
    const status = this.isCompleted ? Status.completed : Status.active;
    this.todoStore.dispatch(Actions.updateContent<Task>(this.todo.Id, { Status: status }));
  }

  delete() {
    this.todoStore.dispatch(Actions.deleteContent(this.todo.Id, true));
  }

}
