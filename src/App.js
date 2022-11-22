
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './Components/Auth/Login';
import RequireAuth from './Components/Auth/RequireAuth';
import Reset from './Components/Auth/Reset';
import SignUp from './Components/Auth/SignUp';
import Calendar from './Components/Dashboard/Calendar';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Dashboard/Profile';
import Gender from './Components/Dashboard/Settings/Gender';
import GenderEdit from './Components/Dashboard/Settings/GenderEdit';
import Religion from './Components/Dashboard/Settings/Religion';
import Settings from './Components/Dashboard/Settings/Settings';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reset' element={<Reset />} />
        {/* -------- Dashboard Route start ------------- */}
        <Route path='/dashboard' element={
        <RequireAuth>
        <Dashboard />
        </RequireAuth>
        }>
         
         <Route path='calendar' element={<Calendar/>}/>
         <Route path='settings' element={<Settings/>}/>
         <Route path ='gender' element={<Gender/>}/>
         <Route path ='religion' element={<Religion/>}/>
         <Route path ='genderEdit/:id' element={<GenderEdit/>}/>
  
         {/* <Route path='profile' element ={<Profile/>}>     
        </Route> */}

         </Route>

          {/* -------- Dashboard Route end------------- */}
        <Route path='*' element={<NotFound/>}></Route>

      </Routes>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
