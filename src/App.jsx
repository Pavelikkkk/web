import React, { useReducer } from 'react';
import './App.css';
import Table from './Table';
import EntityList from './EntityList';
import EntityForm from './EntityForm';

const entitiesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ENTITY':
      return [...state, { ...action.payload, id: Date.now() }];
    case 'DELETE_ENTITY':
      return state.filter(item => item.id !== action.payload);
    default:
      throw new Error('Unknown action type');
  }
};

const App = () => {
  const [entities, dispatch] = useReducer(entitiesReducer, []);

  const addEntity = (entity) => {
    dispatch({ type: 'ADD_ENTITY', payload: entity });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_ENTITY', payload: id });
  };

  return (
    <div className="app">
      <h1>Entity Cards</h1>
      <EntityForm onAddEntity={addEntity} />
      Table
      <Table entities={entities} onDelete={handleDelete} />
      Cards
      <EntityList entities={entities} onDelete={handleDelete} />
    </div>
  );
};

export default App;