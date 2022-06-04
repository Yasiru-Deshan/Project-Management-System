const express = require('express');
const router = express.Router();

//@route GET requests/test
//@desc Tests requests route
//@access public
router.get('/test', (req,res) => res.json({msg: "request students"})
); 
module.exports = router;