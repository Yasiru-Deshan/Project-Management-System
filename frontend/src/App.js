
import React, { useCallback, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Navbar from './components/shared/Navbar/Navbar';
import Notification from './components/shared/Notification/Notification';
import { AuthContext } from './context/AuthContext';
import { NotificationContext } from './context/NotificationContext';
import Footer from './components/Footer/index';
import getRoutes from './routes';
import NavBar from './components/Navbar/index';
require('dotenv').config();
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
import CreatePanel from '../src/pages/Admin/StaffManagement/createPanel';
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

  	const [token, setToken] = useState();
	const [name, setName] = useState();
	const [role, setRole] = useState();
	const [userId, setUserId] = useState();
	const [user, setUser] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [notify, setNotify] = useState();
	const [message, setMessage] = useState();
	const [error, setError] = useState(false);

	const clearNotification = useCallback(() => {
		setNotify(false);
		setMessage(null);
		setError(false);
	}, []);
	const setNotification = useCallback(
		(msg, error) => {
			setMessage(msg);
			setError(error);
			setNotify(true);
			setTimeout(() => {
				clearNotification();
			}, 5000);
		},
		[clearNotification]
	);

	const reloadUser = useCallback((user) => {
		const storedData = JSON.parse(localStorage.getItem('authData'));
		localStorage.setItem(
			'authData',
			JSON.stringify({
				token: storedData.token,
				name: storedData.name,
				id: storedData.id,
				role: storedData.role,
				user
			})
		);

		setUser(user);
	}, []);
	const authenticate = useCallback((token, name, id, role, user) => {
		setToken(token);
		setName(name);
		setUserId(id);

		setUser(user);
		setRole(role);
		localStorage.setItem(
			'authData',
			JSON.stringify({
				token,
				name,
				id,
				role,
				user
			})
		);
		setIsLoading(false);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setName(null);
		setUserId(null);
		setUser(null);
		setRole(null);
		localStorage.removeItem('authData');
		localStorage.clear();
		return <Redirect to={'/login'} />;
	}, []);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem('authData'));
		if (storedData && storedData.token) {
			authenticate(
				storedData.token,
				storedData.name,
				storedData.id,
				storedData.role,
				storedData.user
			);
		}
		setIsLoading(false);
	}, [authenticate]);

	let routes = getRoutes(role, token);
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!token,
				token,
				fullName: name,
				userId: userId,
				role: role,
				user,
				authenticate,
				logout: logout,
				reloadUser
			}}>
			<NotificationContext.Provider
				value={{
					notify,
					message,
					error,
					showNotification: setNotification,
					clearNotification: clearNotification
				}}>
				<BrowserRouter>
					<div className='app'>
						{!isLoading && <NavBar />}
						<Notification />

						<div>
							{!isLoading && routes}
						</div>
						<Footer/>
					</div>
				</BrowserRouter>
			</NotificationContext.Provider>
		</AuthContext.Provider>
	);

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
             <Route path='/admin/staffmng/panel/create' element={<CreatePanel/>} exact/>

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
