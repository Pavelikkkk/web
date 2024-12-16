import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Entrance/componets/App.css';
import Table from './Entrance/componets/Table';
import EntityList from './Entrance/componets/EntityList';
import EntityForm from './Entrance/componets/EntityForm';
import LoginPage from './Entrance/componets/LoginPage';
import { login, logout } from './redux/actions/userActions';
import { addEntity, deleteEntity,} from './redux/actions/entityActions';

const App = () => {
  const dispatch = useDispatch();
  const entities = useSelector(state => state.entities);
  const user = useSelector(state => state.user);

  const handleLogin = (userData) => {
    dispatch(login(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleAddEntity = (entity) => {
    dispatch(addEntity(entity));
  };

  const handleDeleteEntity = (id) => {
    dispatch(deleteEntity(id));
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