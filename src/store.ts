import { Action, AnyAction, Dispatch, Store, Unsubscribe } from 'redux';

export class TodoStore<S> implements Store<S> {

  static instance: TodoStore<any>;

  private store: Store<S>;

  constructor(store: Store<any>) {
    TodoStore.instance = this;
    this.store = store;
  }

  dispatch: Dispatch<S> = this.store.dispatch;

  getState(): S {
    return this.store.getState();
  }

  subscribe(listener: () => void): Unsubscribe {
    return this.store.subscribe(listener);
  }

  replaceReducer(nextReducer: (state: S, action: AnyAction) => S): void {
    return this.store.replaceReducer(nextReducer);
  }
}
