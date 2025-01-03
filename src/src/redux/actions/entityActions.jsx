export const ADD_ENTITY = 'ADD_ENTITY';
export const DELETE_ENTITY = 'DELETE_ENTITY';

export const addEntity = (entity) => ({
  type: ADD_ENTITY,
  payload: entity,
});

export const deleteEntity = (id) => ({
  type: DELETE_ENTITY,
  payload: id,
});
