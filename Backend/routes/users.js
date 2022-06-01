const express = require('express');
const router = express.Router();

//load Users model
const Users = require('../../models/Users');

//@route GET users/test
//@desc Tests users route
//@access public
router.get('/test', (req, res) => res.json({msg: "getting students"})
); 
//@route GET users/register
//@desc Register user
//@access public  
router.get('/register', (req, res) =>{
User.findOne
});
module.exports = router;