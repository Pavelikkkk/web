import React, { useState } from 'react';
import './App.css';
import EntityList from './EntityList';
import EntityForm from './EntityForm';

const App = () => {
  const [entities, setEntities] = useState([]);

  const addEntity = (entity) => {
    setEntities([...entities, entity]);
  };

  return (
    <div className="app">
      <h1>Entity Cards</h1>
      <EntityForm onAddEntity={addEntity} />
      <EntityList entities={entities} />
    </div>
  );
};

export default App;