const express = require('express');
const router = express.Router();

//@route GET studentProfile/test
//@desc Tests studentProfile route
//@access public
router.get('/test', (req,res) => res.json({msg: "geting student profile "})
); 
module.exports = router; 