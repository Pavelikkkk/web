import { createStore, combineReducers } from 'redux';
import entitiesReducer from './reducers/entitiesReducer';
import userReducer from './reducers/userReducer';
import validationReducer from './reducers/validationReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  user: userReducer,
  validationRules: validationReducer,
});

const store = createStore(rootReducer);

export default store;