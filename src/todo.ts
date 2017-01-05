import {customElement, bindable} from 'aurelia-framework';

@customElement('todo')
export class Todo {
  @bindable todo;
  @bindable deleteTodo;
  @bindable completeTodo;

  private todoClass: string;
  attached() {
    this.todo.completed = this.todo.Status.indexOf('completed') > -1 ? true : false;
    this.todoClass = this.todo.completed ? 'completed' : '';
  }
}