const router = require("express").Router();
const presentation = require("../models/presentation");
const Prsentatation = require('../models/presentation');

router.post('/', async(req,res)=>{

    const newGroup = new presentation(req.body);

    try{
        const savedGroup = await newGroup.save();
        res.status(200).json(savedGroup);
    }catch(err){
        res.status(500).json(err);
    }
})

//get presentations
router.get('/all', async(req,res)=>{

     Presentation.find().then((groups)=>{
         res.json(groups)
     }).catch((err)=>{
         console.log(err)
     })

});

//get presentation by id
router.get('/:id', async(req,res)=>{

    try{
        const group = await Presentation.findById(req.params.id);
         res.status(200).json(group);
    }catch(err){
        res.status(500).json(err);
    }
})

//Add student to group
router.put('/add/:id', async (req, res) => {
	try {
		const group = await Prsentatation.findByIdAndUpdate(
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

//update comment
router.put("/edit/:id", async(req,res)=>{

    try{
        const group = await Prsentatation.findById(req.params.id);

        await group.updateOne({ $set:req.body});
        res.status(200).json("Marks has been updated");

   }catch(err){
       res.status(500).json(err);
   }
})

module.exports = router;