import React, { useContext } from 'react';
import HomeMenu from '../../components/shared/Homemenu/HomeMenu';
import { AuthContext } from '../../context/AuthContext';

const Homepage = () => {
	const auth = useContext(AuthContext);
	const adminMenu = [
		{ title: 'Manage Packages', link: '/manage-packages' },
		{ title: 'Manage Instructors', link: '/manage-instructors' },
		{ title: 'Manage Customers', link: '/manage-users' },
		{ title: 'Manage Store', link: '/manage-store' },
		{ title: 'View Orders', link: '/view-orders' },
		{ title: 'View feedbacks', link: '/manage-feedbacks' },
		{ title: 'Manage Advertisment', link: '/manage-advertisment' }
	];

	const instructorMenu = [
		{ title: 'Manage Advertisment', link: '/manage-advertisment' },
		{ title: 'Manage Workouts', link: '/manage-workouts' },
		{ title: 'Manage Mealplans', link: '/manage-mealplans' },
		{ title: 'Customer Progress', link: '/manage-progress' },
		{ title: 'My Clients', link: '/my-clients' },
		{ title: 'My profile', link: '/instructor-profile' },
		{ title: 'My Salary', link: '/view-instructor-salary' }
	];

	const userMenu = [
		{ title: 'My Workouts', link: '/view-customer-workouts' },
		{ title: 'My Progress', link: '/view-customer-progress' },
		{ title: 'My profile', link: '/customer-profile' },
		{ title: 'My MealPlans', link: '/view-customer-mealplans' },
		{ title: 'Packages', link: '/view-packages' },
		{ title: 'feedbacks', link: '/manage-feedbacks' },
		{ title: 'My Advertisment', link: '/manage-advertisment' }
	];
	return (
		<div className='pb-5'>
			<div className='row welcome-board m-5 text-center'>
				<h1>Welcome to alpha fitness</h1>
			</div>
			{auth.role === 'admin' ? (
				<HomeMenu options={adminMenu} />
			) : auth.role === 'instructor' ? (
				<HomeMenu options={instructorMenu} />
			) : (
				<HomeMenu options={userMenu} />
			)}
		</div>
	);
};

export default Homepage;
