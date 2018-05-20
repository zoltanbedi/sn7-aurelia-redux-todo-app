import { Status, Task } from '@sensenet/default-content-types';
import { Actions, Reducers } from '@sensenet/redux';
import { autoinject } from 'aurelia-framework';
import { TodoStore } from 'store';

@autoinject
export class TodoAdd {
  private todoName: string;

  constructor(private readonly store: TodoStore<{ sensenet: Reducers.SensenetStateType }>) { }

  addTodo() {
    const parentPath = '/workspaces/Project/budapestprojectworkspace/tasks';
    const content = {
      DisplayName: this.todoName,
      Status: Status.active
    } as Task;
    this.store.dispatch(Actions.createContent(parentPath, content, 'Task'));
  }

  submit() {
    this.addTodo();
    this.todoName = '';
  }
}
