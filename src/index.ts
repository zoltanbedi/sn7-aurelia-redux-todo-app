import { reduxStore } from './store';
import { Actions } from 'sn-redux';
import { ODataApi } from 'sn-client-js';
import { getVisibleTodos } from './reducers/filtering';
import { SN_DEMO_SITE_URL } from './constants';

export class TodoIndex {
  private visibleTodos;
  private visibilityFilter: string = 'All';
  private todoStore = reduxStore;
  title: string = 'Todos';

  constructor() {
    this.todoStore.subscribe(() =>
      this.update()
    );

    this.update();
    this.fetchData(this.visibilityFilter);
  }

  update() {
    const state = this.todoStore.getState();
    this.visibleTodos = getVisibleTodos(state, this.visibilityFilter);
  }

  fetchData(filter) {
    let optionObj = new ODataApi.ODataParams({
      select: ['DisplayName', 'Status']
    });
    if (filter === 'Active') {
      optionObj['filter'] = `isOf('Task') and Status eq %27Active%27`;
    }
    else if (filter === 'Completed') {
      optionObj['filter'] = `isOf('Task') and Status eq %27Completed%27`;
    }
    else {
      optionObj['filter'] = `isOf('Task')`;
    }
    this.todoStore.dispatch(Actions.RequestContent(SN_DEMO_SITE_URL, optionObj));
  }

  filterChanged(nextFilter) {
    this.visibilityFilter = nextFilter;
    this.fetchData(nextFilter);
  }
}
