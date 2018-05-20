import { IODataParams } from '@sensenet/client-core';
import { Task } from '@sensenet/default-content-types';
import { Actions, Reducers } from '@sensenet/redux';
import { autoinject } from 'aurelia-framework';
import { getVisibleTodos } from 'reducers/filtering';
import { TodoStore } from 'store';
import '../../../static/styles/styles.css';

@autoinject
export class Home {

  userName: string;
  todos: Task[];
  filter: string = 'All';

  constructor(private store: TodoStore<{ sensenet: Reducers.SensenetStateType }>) {
  }

  attached() {
    this.store.subscribe(() =>
      this.update()
    );

    this.update();
    this.fetchData();
  }

  update() {
    const state = this.store.getState();
    this.userName = state.sensenet.session['user'].userName;
    this.todos = getVisibleTodos(state, this.filter);
  }

  fetchData() {
    const optionObj = {
      select: ['DisplayName', 'Status']
    } as IODataParams<Task>;
    switch (this.filter) {
      case 'Active':
        optionObj.filter = `isOf('Task') and Status eq 'Active'`;
        break;
      case 'Completed':
        optionObj.filter = `isOf('Task') and Status eq 'Completed'`;
        break;
      case 'All':
      default:
        optionObj.filter = `isOf('Task')`;
        break;
    }
    this.store.dispatch(Actions.requestContent('/workspaces/Project/budapestprojectworkspace/Tasks', optionObj));
  }

  filterChanged(nextFilter: string) {
    this.filter = nextFilter;
    this.fetchData();
  }
}
