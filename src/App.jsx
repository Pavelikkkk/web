import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './Entrance/componets/App.css';
import Table from './Entrance/componets/Table';
import EntityList from './Entrance/componets/EntityList';
import EntityForm from './Entrance/componets/EntityForm';
import LoginPage from './Entrance/componets/LoginPage';
import { entitiesReducer } from './redux/reducers/entitiesReducer'; 

const App = () => {
  const [entities, dispatchEntities] = useReducer(entitiesReducer, []);
  const [user, setUser] = useState(null); 
  
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/mods')
      .then(response => response.json())
      .then(data => dispatchEntities({ type: 'SET_ENTITIES', payload: data }))
      .catch(error => console.error('Error fetching entities:', error));
  }, []);

  const handleLogin = (userData) => {
    setUser(userData); 
  };

  const handleLogout = () => {
    setUser(null); // 
  };

  const handleAddEntity = (entity) => {
    fetch('http://127.0.0.1:5000/api/mods', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entity),
    })
      .then(response => response.json())
      .then(newEntity => dispatchEntities({ type: 'ADD_ENTITY', payload: newEntity }))
      .catch(error => console.error('Error adding entity:', error));
  };

  const handleDeleteEntity = (id) => {
    fetch(`http://127.0.0.1:5000/api/mods/${id}`, {
      method: 'DELETE',
    })
      .then(() => dispatchEntities({ type: 'DELETE_ENTITY', payload: id }))
      .catch(error => console.error('Error deleting entity:', error));
  };

  return (
    <Router>
      <div className="app">
        <h1>Entity Cards</h1>
        {user ? (
          <>
            <button onClick={handleLogout}>Выйти</button>
            <EntityForm onAddEntity={handleAddEntity} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Table entities={entities} onDelete={handleDeleteEntity} />
                    <EntityList entities={entities} onDelete={handleDeleteEntity} />
                  </>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;