const router = require("express").Router();
const Topic = require('../models/Topic');

//Add new topic
router.post('/', async(req,res)=>{

    const newTopic = new Topic(req.body);

    try{
        const savedTopic = await newTopic.save();
        res.status(200).json(savedTopic);
    }catch(err){
        res.status(500).json(err);
    }
});

//get topics
router.get('/all', async(req,res)=>{

     Topic.find().then((topics)=>{
         res.json(topics)
     }).catch((err)=>{
         console.log(err)
     })

});

//get topic by id
router.get('/:id', async(req,res)=>{

    try{
        const topic = await Topic.findById(req.params.id);
         res.status(200).json(topic);
    }catch(err){
        res.status(500).json(err);
    }
})

//Approve a topic
router.put('/approve/:id', async (req, res) => {
	try {
		const topic = await Topic.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{ new: true }
		);
		res.status(200).json(topic);
	} catch (err) {
		res.status(500).json(err);
	}
});




module.exports = router;