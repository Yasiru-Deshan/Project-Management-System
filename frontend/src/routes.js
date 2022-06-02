import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Homepage from './pages/Home/Homepage';
import Aboutus from './pages/Aboutus/Aboutus';
import Contactus from './pages/Contactus/Contactus';
import UserManagement from './pages/UserManagement/UserManagement';
import CreateCustomer from './components/UserManagement/CreateCustomer';
import UpdateCustomer from './components/UserManagement/UpdateCustomer';
import CustomerProfile from './components/UserManagement/CustomerProfile';
import TopicAccept from './components/Supervisor/TopicAccept';
import Chat from './components/Chat/chat';
import MyProfile from './pages/profile';
import PanelMember from './pages/PanelMember';
import SupervisorHome from './pages/Supervisor';
import SignUp from './components/SignUp/signup';
import EvaluationPage from './pages/evaluationPage';
import Requests from './components/Requests';

const getRoutes = (role, token) => {
	let routes;
	if (token && role === 'panelmember') {
		routes = (
			<Switch>
				<Route exact path='/'>
					<PanelMember/>
				</Route>
				<Route exact path='/about'>
					<Aboutus />
				</Route>
				<Route exact path='/contact'>
					<Contactus />
				</Route>
				 <Route exact path='/profile/:id'>
					<MyProfile />
				</Route>
				<Route
					exact
					path='/customer-profile'
					component={CustomerProfile}
				/>
				
				<Route exact path='/'>
					<PanelMember />
				</Route>
				<Redirect to='/'></Redirect>
			</Switch>
		);
	} else if (token && role === 'cosupervisor') {
		routes = (
			<Switch>
				<Route exact path='/'>
					<Chat />
				</Route>
				<Route exact path='/myprofile'>
					<CustomerProfile />
				</Route>
				<Route exact path='/requests'>
					<Requests />
				</Route>
			
				<Route exact path='/'>
					<SupervisorHome />
				</Route>
				 <Route exact path='/profile/:id'>
					<MyProfile />
				</Route>
				<Route
					exact
					path='/customer-profile'
					component={CustomerProfile}
				/>
				<Redirect to='/'></Redirect>
			</Switch>
		);
	} else if (token && role === 'supervisor') {
		routes = (
			<Switch>
				<Route exact path='/'>
					<SupervisorHome />
				</Route>
				<Route exact path='/topic/:id'>
					<TopicAccept />
				</Route>
				<Route exact path='/chat'>
					<Chat />
				</Route>
				<Route exact path='/evaluation/:id'>
					<EvaluationPage />
				</Route>
                <Route exact path='/myprofile'>
					<MyProfile />
				</Route>
				<Route exact path='/requests'>
					<Requests />
				</Route>
				<Route
					exact
					path='/customer-profile'
					component={CustomerProfile}
				/>

                 <Route exact path='/profile/:id'>
					<MyProfile />
				</Route>

				<Route exact path='/about'>
					<Aboutus />
				</Route>
				<Route exact path='/contact'>
					<Contactus />
				</Route>
				<Route exact path='/'>
					<Homepage />
				</Route>
				<Redirect to='/'></Redirect>
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route exact path='/'>
					<Login />
				</Route>
			    <Route exact path='/profile/:id'>
					<MyProfile />
				</Route>
				<Route exact path='/signup'>
					<SignUp />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>

				<Redirect to='/login'></Redirect>
			</Switch>
		);
	}
	return routes;
};

export default getRoutes;
