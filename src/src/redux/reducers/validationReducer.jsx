import { FETCH_VALIDATION_RULES } from '../actions/validationActions';

const initialState = null;

const validationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VALIDATION_RULES:
      return action.payload;
    default:
      return state;
  }
};

export default validationReducer;