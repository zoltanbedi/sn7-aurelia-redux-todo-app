import { Reducers } from '@sensenet/redux';
import { combineReducers } from 'redux';

export const createList = (filter) => {
  const handleToggle = (state, action, filter) => {
    const { Id, Status } = action.payload.d;
    const shouldRemove = (
      (Status[0] === 'active' && filter !== 'active' && filter !== 'all') ||
      (Status[0] === 'completed' && filter !== 'completed' && filter !== 'all')
    );
    return shouldRemove ?
      state.filter(id => id !== Id) :
      state;
  };
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_CONTENT_SUCCESS':
        return action.payload.result;
      case 'CREATE_CONTENT_SUCCESS':
        return [...state, action.payload.d.Id];
      case 'UPDATE_CONTENT_SUCCESS':
        return handleToggle(state, action, filter);
      case 'DELETE_CONTENT_SUCCESS':
        if (action.payload.d.results.length > 0) {
          const newIds = [];
          const deletedIds = action.payload.d.results.map((result) => result.Id);
          for (const id of state) {
            if (deletedIds.indexOf(id) === -1) {
              newIds.push(id);
            }
          }
          return newIds;
        }
        break;
      default:
        return state;
    }
  };
  const isFetching = (state = false, action) => {
    switch (action.type) {
      case 'FETCH_CONTENT_REQUEST':
        return true;
      case 'FETCH_CONTENT_SUCCESS':
      case 'FETCH_CONTENT_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state: any = null, action: any) => {
    switch (action.type) {
      case 'FETCH_CONTENT_FAILURE':
        return action.message;
      case 'FETCH_CONTENT_REQUEST':
      case 'FETCH_CONTENT_SUCCESS':
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  });
};


const visibilityFilter = (state = 'All', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export const listByFilter = combineReducers({
  All: createList('all'),
  Active: createList('active'),
  Completed: createList('completed'),
  VisibilityFilter: visibilityFilter
});

export const getVisibleTodos = (state, filter) => {
  const ids = Reducers.getIds(state.listByFilter[filter]);
  return ids.map(Id => Reducers.getContent(state.sensenet.children.entities, Id));
};

export const getIsFetching = (state, filter) =>
  Reducers.getFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  Reducers.getError(state.listByFilter[filter]);

export const getVisibilityFilter = (state) =>
  state.sensenet.children.filter;

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
