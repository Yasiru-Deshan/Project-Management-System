import './App.css'; 
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SupervisorHome from './pages/Supervisor';
import PanelMemberHome from './pages/PanelMember';
import SigninPage from './pages/signin';
import LoginPage from './pages/login';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TopicAccept from './components/Supervisor/TopicAccept';
import Footer from './components/Footer';
// import ChatApp from './components/Chat/chat';

import AdminDashboard from '../src/pages/Admin/Dashboard/dashboard';
import StaffManagement from '../src/pages/Admin/StaffManagement/staff';
import UpdateStaffManagement from '../src/pages/Admin/StaffManagement/updateStaff';
import StudentManagement from '../src/pages/Admin/StudentManagement/student';
import UpdateStudentManagement from '../src/pages/Admin/StudentManagement/updateStudent';
import PanelManagement from '../src/pages/Admin/StaffManagement/panel';
import UpdatePanelManagement from '../src/pages/Admin/StaffManagement/updatePanel';
import AssignPanel from '../src/pages/Admin/StudentManagement/panel';
import UploadMarkingScheme from '../src/pages/Admin/MarkingSchemes/uploadMarkingScheme';
import ViewMarkingSchemes from '../src/pages/Admin/MarkingSchemes/viewMarkingSchemes';
import UploadDocumentTemplates from '../src/pages/Admin/DocumentTemplates/uploadDocumentTemplate';
import ViewDocumentTemplates from '../src/pages/Admin/DocumentTemplates/viewDocumentTemplates';
import UploadSubmission from '../src/pages/Admin/Submissions/uploadSubmission';
import ViewSubmissions from '../src/pages/Admin/Submissions/viewSubmissions';


function App() {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <Router>
       <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>    
         <Routes>
             <Route path='/' element={<SupervisorHome/>} exact/>
             <Route path='/panelmember' element={<PanelMemberHome/>} exact/>
             <Route path='/signin' element={<SigninPage/>} exact/>
             <Route path='/login' element={<LoginPage/>} exact/>
             <Route path='/topic/:id' element={<TopicAccept/>} exact/>
             {/* <Route path='/chat' element={<ChatApp/>} exact/> */}

             <Route path='/admin/dashboard' element={<AdminDashboard/>} exact/>
             <Route path='/admin/staffmng/viewstaff' element={<StaffManagement/>} exact/>
             <Route path='/admin/staffmng/viewstaff/edit/:id' element={<UpdateStaffManagement/>} exact/>
             <Route path='/admin/studentmng/viewstudents' element={<StudentManagement/>} exact/>
             <Route path='/admin/studentmng/viewstudents/edit/:id' element={<UpdateStudentManagement/>} exact/>
             <Route path='/admin/staffmng/panel' element={<PanelManagement/>} exact/>
             <Route path='/admin/staffmng/panel/edit/:id' element={<UpdatePanelManagement/>} exact/>
             <Route path='/admin/studentmng/assignpanel' element={<AssignPanel/>} exact/>
             <Route path='/admin/doctemplate/upload' element={<UploadDocumentTemplates/>} exact/>
             <Route path='/admin/doctemplate/view' element={<ViewDocumentTemplates/>} exact/>
             <Route path='/admin/markingschemes/upload' element={<UploadMarkingScheme/>} exact/>
             <Route path='/admin/markingschemes/view' element={<ViewMarkingSchemes/>} exact/>
             <Route path='/admin/submissions/upload' element={<UploadSubmission/>} exact/>
             <Route path='/admin/submissions/view' element={<ViewSubmissions/>} exact/>

        </Routes>
       <Footer/>
    </Router>
  );
}

export default App;