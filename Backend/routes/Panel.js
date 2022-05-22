const router = require("express").Router();
const Panel = require("../models/Panel");

// Create a panel
router.route("/add").post( async(req, res)=>{

    const panel_name = req.body.panel_name;
    const supervisor_01_name = req.body.supervisor_01_name;
    const supervisor_02_name = req.body.supervisor_02_name;
    const supervisor_03_name = req.body.supervisor_03_name;
    const supervisor_04_name = req.body.supervisor_04_name;

    const newPanel = new Panel({
        panel_name,
        supervisor_01_name,
        supervisor_02_name,
        supervisor_03_name,
        supervisor_04_name
    });

    newPanel.save().then(()=>{
        res.json("You have created a Panel, Successfully!");

    }).catch((err)=>{
        console.log(err);
    })
});

// Retrive the panel details
router.route("/view").get( async(req,res)=>{

    Panel.find().then((pannels)=>{
        res.json(pannels)
    }).catch((err)=>{
        console.log(err)
    });

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