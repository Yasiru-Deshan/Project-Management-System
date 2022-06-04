const router = require("express").Router();
const Group = require('../models/group');

router.post('/', async(req,res)=>{

    const newGroup = new Group(req.body);

    try{
        const savedGroup = await newGroup.save();
        res.status(200).json(savedGroup);
    }catch(err){
        res.status(500).json(err);
    }
})

//get Groups
router.get('/all', async(req,res)=>{

     Group.find().then((groups)=>{
         res.json(groups)
     }).catch((err)=>{
         console.log(err)
     })

});

//get group by id
router.get('/:id', async(req,res)=>{

    try{
        const group = await Group.findById(req.params.id);
         res.status(200).json(group);
    }catch(err){
        res.status(500).json(err);
    }
})

//Add student to group
router.put('/add/:id', async (req, res) => {
	try {
		const group = await Group.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			
		);
		res.status(200).json(group);
	} catch (err) {
		res.status(500).json(err);
	}
});

//update marks
router.put("/edit/:id", async(req,res)=>{

    try{
        const group = await Group.findById(req.params.id);

        await group.updateOne({ $set:req.body});
        res.status(200).json("Marks has been updated");

   }catch(err){
       res.status(500).json(err);
   }
})

module.exports = router;