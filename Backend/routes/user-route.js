const express = require('express');
const {
	login,
	addUser,
	promoteUser,
    signUp,
	updateUser,
	getSuperVisors,
	getAllUsers,
	getProfile,
	deleteCustomer,
	uploadProfilePic
} = require('../controllers/user-controller');
const adminAuth = require('../middleware/AdminAuthentication');
const Authentication = require('../middleware/Authentication');
const instructorAuth = require('../middleware/InstructorAuthentication');
const router = express.Router();

router.get('/', getSuperVisors);
router.get('/all', getAllUsers);
router.post('/login', login);
router.post('/signup', signUp); //admin register
router.post('/create', adminAuth, addUser);
router.post('/promote', adminAuth, promoteUser);
router.get('/profile/:id',getProfile)
router.put('/update', adminAuth, updateUser);
router.put('/profilepic', Authentication, uploadProfilePic);
router.delete('/delete', adminAuth, deleteCustomer);

module.exports = router;
