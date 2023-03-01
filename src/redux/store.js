import { createStore, combineReducers } from 'redux';
import tokenReducer from './reducers/tokenReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    tokenReducer, userReducer
});

export const store = createStore(rootReducer);
