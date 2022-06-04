const router = require("express").Router();
const Request = require('../models/Requests');
const User = require('../models/user-model')

//Add new request to user
 router.put('/add/:id', async(req,res)=>{

    try{
    const newRequest = new Request({
        groupId: req.body.groupId,
        status: true

    })
        const user = await User.findById(req.params.id);

        await user.updateOne({ $push:{requests:[newRequest]}});
        return res.status(200).json("Request Sent");
    }
   catch(err){
        res.status(500).json(err);
    }
 })

 //add new request
 router.post('/new/:id', async(req,res)=>{

    const newRequest = new Request({
        groupId: req.body.groupId,
        supervisorId: req.params.id,
        status: false
    });

    try{
        const savedRequest = await newRequest.save();
        res.status(200).json(savedRequest);
    }catch(err){
        res.status(500).json(err);
    }
});

//get request by userid
router.get('/:id', async(req,res)=>{

    try{
        const request = await Request.find({supervisorId: req.params.id});
         res.status(200).json(request);
    }catch(err){
        res.status(500).json(err);
    }
})

//get accepted requests
router.get('/groups/:id', async(req,res)=>{

    try{
        const request = await Request.find({supervisorId: req.params.id, status:true});
         res.status(200).json(request);
    }catch(err){
        res.status(500).json(err);
    }
})

 //get requests
router.get('/all', async(req,res)=>{

    
     Topic.find().then((topics)=>{
         res.json(topics)
     }).catch((err)=>{
         console.log(err)
     })

});

//accept request
router.put('/:id', async (req,res)=>{
    try{
        const updatedRequest = await Request.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }
            
        );
        res.status(200).json(updatedRequest);
    }catch(err){
        res.status(500).json(err);
    }
})

//reject request
router.delete('/:id', async (req, res) => {
	try {
		await Request.findByIdAndDelete(req.params.id);
		res.status(200).json('Request has been rejected');
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router