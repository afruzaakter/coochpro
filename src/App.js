
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
