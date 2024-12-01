import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import EntityList from './EntityList';
import EntityForm from './EntityForm';

const App = () => {
  const [entities, setEntities] = useState([]);

  const addEntity = (entity) => {
    setEntities([...entities, entity]);
  };

  const handleDelete = (id) => {
    setEntities(entities.filter(item => item.id !== id));
  };

  const handleEdit = (id) => {
    // dodelat
    console.log('Edit item with id:', id);
  };

  return (
    <div className="app">
      <h1>Entity Cards</h1>
      <EntityForm onAddEntity={addEntity} />
      Table
      <Table entities={entities} onDelete={handleDelete} onEdit={handleEdit} />
      Cards
      <EntityList entities={entities} onDelete={handleDelete} onEdit={handleEdit} />
      
    </div>
  );
};

export default App;

