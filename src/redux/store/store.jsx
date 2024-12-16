import { createStore, combineReducers } from 'redux';
import entitiesReducer from '../reducers/entitiesReducer';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;