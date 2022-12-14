
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login';
import RequireAuth from './Components/Auth/RequireAuth';
import Reset from './Components/Auth/Reset';
import SignUp from './Components/Auth/SignUp';
import AllUser from './Components/Dashboard/AllUser';
import Calendar from './Components/Dashboard/Calendar';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/UserProfile/Profile';
import ProfileEdit from './Components/UserProfile/ProfileEdit';
import BloodGroup from './Components/Dashboard/Settings/BloodGroup';
import BloodGroupEdit from './Components/Dashboard/Settings/BloodGroupEdit';
import Department from './Components/Dashboard/Settings/Department';
import DepartmentEdit from './Components/Dashboard/Settings/DepartmentEdit';
import Designation from './Components/Dashboard/Settings/Designation';
import DesignationEdit from './Components/Dashboard/Settings/DesignationEdit';
import District from './Components/Dashboard/Settings/District';
import DistrictEdit from './Components/Dashboard/Settings/DistrictEdit';
import Division from './Components/Dashboard/Settings/Division';
import DivisionEdit from './Components/Dashboard/Settings/DivisionEdit';
import Gender from './Components/Dashboard/Settings/Gender';
import GenderEdit from './Components/Dashboard/Settings/GenderEdit';
import Location from './Components/Dashboard/Settings/Location';
import LocationEdit from './Components/Dashboard/Settings/LocationEdit';
import MaritalEdit from './Components/Dashboard/Settings/MaritalEdit';
import MaritalStatus from './Components/Dashboard/Settings/MaritalStatus';
import Religion from './Components/Dashboard/Settings/Religion';
import ReligionEdit from './Components/Dashboard/Settings/ReligionEdit';
import Settings from './Components/Dashboard/Settings/Settings';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';
import LeadsEntry from './Components/Dashboard/CRM/LeadsEntry';
import DashboardHomePage from './Components/Dashboard/DashboardHomePage';
import FollowUp from './Components/Dashboard/CRM/FollowUp';
import Proposal from './Components/Dashboard/CRM/Proposal';
import LeadEntryEdit from './Components/Dashboard/CRM/LeadEntryEdit';
import BusinessType from './Components/Dashboard/Settings/BusinessType';
import BusinessTypeEdit from './Components/Dashboard/Settings/BusinessTypeEdit';
import Opportunity from './Components/Dashboard/Settings/Opportunity';
import OpportunityEdit from './Components/Dashboard/Settings/OpportunityEdit';
import FollowUpType from './Components/Dashboard/Settings/FollowUpType';
import FollowUpTypeEdit from './Components/Dashboard/Settings/FollowUpTypeEdit';
import CRMReport from './Components/Dashboard/CRM/CRMReport';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/profile' element ={<Profile/>} />     
         <Route path='/profileEdit' element ={<ProfileEdit/>} />     
        {/* -------- Dashboard Route start ------------- */}
        <Route path='/dashboard' element={
        <RequireAuth>
        <Dashboard />
        </RequireAuth>
        }>
         
         <Route path='calendar' element={<Calendar/>}/>
         <Route path='settings' element={<Settings/>}/>
         <Route path ='gender' element={<Gender/>}/>
         <Route path ='genderEdit/:id' element={<GenderEdit/>}/>
         <Route path ='religion' element={<Religion/>}/>
         <Route path ='religionEdit/:id' element={<ReligionEdit/>}/>
         <Route path ='maritalStatus' element={<MaritalStatus/>}/>
         <Route path ='maritalEdit/:id' element={<MaritalEdit/>}/>
         <Route path ='bloodgroup' element={<BloodGroup/>}/>
         <Route path ='bloodgroupEdit/:id' element={<BloodGroupEdit/>}/>
         <Route path ='location' element={<Location/>}/>
         <Route path ='locationEdit/:id' element={<LocationEdit/>}/>
         <Route path ='division' element={<Division/>}/>
         <Route path ='divisionEdit/:id' element={<DivisionEdit/>}/>
         <Route path ='district' element={<District/>}/>
         <Route path ='districtEdit/:id' element={<DistrictEdit/>}/>
         <Route path ='department' element={<Department/>}/>
         <Route path ='departmentEdit/:id' element={<DepartmentEdit/>}/>
         <Route path ='designation' element={<Designation/>}/>
         <Route path ='designationEdit/:id' element={<DesignationEdit/>}/>
         <Route path ='businessType' element={<BusinessType/>}/>
         <Route path ='businessTypeEdit/:id' element={<BusinessTypeEdit/>}/> 
         <Route path='allUser' element ={<AllUser/>} />     
         <Route path='leadsEntry' element ={<LeadsEntry/>} />  
         <Route path ='leadEntryEdit/:id' element={<LeadEntryEdit/>}/>   
         <Route path='opportunity' element ={<Opportunity/>} />  
         <Route path ='opportunityEdit/:id' element={<OpportunityEdit/>}/>   
         <Route path='followUpType' element ={<FollowUpType/>} />  
         <Route path ='followUpTypeEdit/:id' element={<FollowUpTypeEdit/>}/>   
         <Route path='followUp' element ={<FollowUp/>} />     
         <Route path='proposal' element ={<Proposal/>} />     
         <Route path='crmreport' element ={<CRMReport/>} />     
         <Route path='dashboardhomepage' element ={<DashboardHomePage/>} />     
         
  

         </Route>

          {/* -------- Dashboard Route end------------- */}
        <Route path='*' element={<NotFound/>}></Route>

      </Routes>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
