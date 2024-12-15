import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Table from './Table';
import EntityList from './EntityList';
import EntityForm from './EntityForm';
import LoginPage from './LoginPage';

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


const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload; 
    case 'LOGOUT':
      return null; 
    default:
      throw new Error('Unknown action type');
  }
};

const App = () => {
  const [entities, dispatchEntities] = useReducer(entitiesReducer, []);
  const [user, dispatchUser] = useReducer(userReducer, null);

  const addEntity = (entity) => {
    dispatchEntities({ type: 'ADD_ENTITY', payload: entity });
  };

  const handleDelete = (id) => {
    dispatchEntities({ type: 'DELETE_ENTITY', payload: id });
  };

  const handleLogin = (userData) => {
    dispatchUser({ type: 'LOGIN', payload: userData }); 
  };

  const handleLogout = () => {
    dispatchUser({ type: 'LOGOUT' }); 
  };

  return (
    <Router>
      <div className="app">
        <h1>Entity Cards</h1>
        {user ? (
          <>
            <button onClick={handleLogout}>Выйти</button>
            <EntityForm onAddEntity={addEntity} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Table entities={entities} onDelete={handleDelete} />
                    <EntityList entities={entities} onDelete={handleDelete} />
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