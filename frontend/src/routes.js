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

import SupervisorHome from './pages/Supervisor'

const getRoutes = (role, token) => {
	let routes;
	if (token && role === 'user') {
		routes = (
			<Switch>
				<Route exact path='/'>
					<SupervisorHome/>
				</Route>
				<Route exact path='/about'>
					<Aboutus />
				</Route>
				<Route exact path='/contact'>
					<Contactus />
				</Route>
				<Route
					exact
					path='/customer-profile'
					component={CustomerProfile}
				/>
				
				<Route exact path='/login'>
					<Homepage />
				</Route>
				<Redirect to='/'></Redirect>
			</Switch>
		);
	} else if (token && role === 'instructor') {
		routes = (
			<Switch>
				<Route exact path='/'>
					<Homepage />
				</Route>
				<Route exact path='/about'>
					<Aboutus />
				</Route>
				<Route exact path='/contact'>
					<Contactus />
				</Route>
			
				<Route exact path='/login'>
					<Homepage />
				</Route>
				<Redirect to='/'></Redirect>
			</Switch>
		);
	} else if (token && role === 'admin') {
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
				<Route exact path='/manage-users'>
					<UserManagement />
				</Route>
				<Route exact path='/create-customer'>
					<CreateCustomer />
				</Route>
				<Route
					exact
					path='/update-customer'
					component={UpdateCustomer}
				/>
				<Route
					exact
					path='/customer-profile'
					component={CustomerProfile}
				/>

			

				<Route exact path='/about'>
					<Aboutus />
				</Route>
				<Route exact path='/contact'>
					<Contactus />
				</Route>
				<Route exact path='/login'>
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
				<Route exact path='/about'>
					<Aboutus />
				</Route>
				<Route exact path='/contact'>
					<Contactus />
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
