
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login';
import RequireAuth from './Components/Auth/RequireAuth';
import SignUp from './Components/Auth/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/dashboard' element={
        <RequireAuth>
        <Dashboard />
        </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
