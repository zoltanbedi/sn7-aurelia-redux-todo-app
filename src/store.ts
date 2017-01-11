import 'rxjs';
import { combineReducers } from 'redux';
import { Store, Reducers } from 'sn-redux';
import { SetSiteUrl } from 'sn-client-js';
import { listByFilter } from './reducers/filtering';

class TodoStore {
    constructor() {
        SetSiteUrl('https://demo06.demo.sensenet.com');
    }

    configureStore() {
        const collection = Reducers.collection;
        const myReducer = combineReducers({
            collection,
            listByFilter
        });

        return Store.configureStore(myReducer);
    }

}

export const reduxStore = new TodoStore().configureStore();