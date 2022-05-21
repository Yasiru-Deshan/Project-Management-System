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

module.exports = router;