import { ADD_ENTITY, DELETE_ENTITY,} from '../actions/entityActions';

const initialState = [];

const entitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTITY:
      return [...state, { ...action.payload, id: Date.now() }];
    case DELETE_ENTITY:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default entitiesReducer;