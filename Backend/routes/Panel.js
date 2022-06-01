const router = require("express").Router();
const Panel = require("../models/panel");

// Create a panel
router.route("/add").post( async(req, res)=>{

    const panel = req.body.panel;
    const supervisor_01 = req.body.supervisor_01;
    const supervisor_02 = req.body.supervisor_02;
    const supervisor_03 = req.body.supervisor_03;
    const supervisor_04 = req.body.supervisor_04;

    const newPanel = new Panel({
        panel,
        supervisor_01,
        supervisor_02,
        supervisor_03,
        supervisor_04
    });

    newPanel.save().then(()=>{
        res.json("You have created a Panel, Successfully!");

    }).catch((err)=>{
        console.log(err);
    })
});

// Retrive the panel details
router.route("/view").get( async(req,res)=>{

    try {
        const panel = await Panel.find();
    
        res.json({
            "panel": panel
        });
        
    } catch (error) {
        res.status(400).json(error);
    }

});

// Retrieve specific panel data
router.route('/edit/:id').get(async(req, res) => {

    const id = req.params.id;

    try{
        const panel = await Panel.findOne({_id:id});
        res.json(panel);
        
    }catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
});

// Update the panel
router.route("/edit/:id").put( async(req,res)=>{

    try{
        const panel = await Panel.findById(req.params.id);

        await panel.updateOne({ $set:req.body});
        res.status(200).json("Panel has been updated, Successfully!");

   }catch(err){
       res.status(500).json(err);
   }
})


// Delete the panel
router.route("/delete/:id").delete( async(req,res)=>{

    try{
        const panel = await Panel.findById(req.params.id);
            await panel.deleteOne();
            res.status(200).json("The panel has been deleted, Successfully!")
    
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;