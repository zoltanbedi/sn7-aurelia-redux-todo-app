import 'rxjs';
import { combineReducers } from 'redux';
import { Store, Actions, Reducers } from 'sn-redux';
import { ODataApi, Content, SetSiteUrl } from 'sn-client-js';
import { getVisibleTodos, getErrorMessage, getIsFetching, listByFilter } from './reducers/filtering';

export class TodoIndex {
  private todoStore;
  private visibleTodosProp: VisibleTodoList;
  private visibleTodos;
  private visibilityFilter: string = 'All';

  constructor() {
    SetSiteUrl('https://demo06.demo.sensenet.com');

    const collection = Reducers.collection;
    const myReducer = combineReducers({
        collection,
        listByFilter
    });

    this.todoStore = Store.configureStore(myReducer);
    this.todoStore.subscribe(() =>
      this.update()
    );

    this.update();
    this.fetchData(this.visibilityFilter);
  }

  update() {
    const state = this.todoStore.getState();
    this.visibleTodosProp = this.mapStateToProps(state, this.visibilityFilter);
    this.visibleTodos = this.visibleTodosProp.collection;
  }

  fetchData(filter) {
    const { path, fetchTodos } = this.visibleTodosProp;
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
    this.todoStore.dispatch(fetchTodos(path, optionObj));
  }

  addClicked(value) {
    let content = Content.Create('Task', {
        Type: 'Task',
        DisplayName: value
    });
    content['Status'] = 'active';
    const url = '/workspaces/Project/budapestprojectworkspace/Tasks';
    this.todoStore.dispatch(Actions.CreateContent(url, content));
  }

  filterChanged(nextFilter) {
    this.visibilityFilter = nextFilter;
    this.fetchData(nextFilter);
  }

  completeTodo(index) {
    const state = this.todoStore.getState();
    const status = state.collection.byId[index].Status[0] === 'active' ? 'completed' :  'active';
    this.todoStore.dispatch(this.visibleTodosProp.onTodoClick(index, { Status: status }));
  }

  deleteTodo(index) {
    this.todoStore.dispatch(this.visibleTodosProp.onDeleteClick(index, true));
  }

  mapStateToProps = (state, filter) => {
    filter = filter || 'All';
    const url = '/workspaces/Project/budapestprojectworkspace/Tasks';
    return {
      collection: getVisibleTodos(state, filter),
      errorMessage: getErrorMessage(state, filter),
      isFetching: getIsFetching(state, filter),
      filter,
      options: undefined,
      path: url,
      onTodoClick: Actions.UpdateContent,
      onDeleteClick: Actions.Delete,
      fetchTodos: Actions.RequestContent
    };
  }
}


export interface VisibleTodoList {
  onTodoClick: Function;
  onDeleteClick: Function;
  collection: any;
  path: string;
  options: ODataApi.ODataParams;
  filter: string;
  fetchTodos: Function;
  isFetching: false;
  errorMessage: any;
}