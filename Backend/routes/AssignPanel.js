const router = require("express").Router();
const Panel = require("../models/panel");
const StudentGrp = require("../models/studentGrp");

// Retrive the panel details
router.route("/view").get( async(req,res)=>{

    Panel.find().then((panel)=>{
        res.json(panel);
    }).catch((err)=>{
        console.log(err);
    });

});

// Retrive the student group details
router.route("/viewstudentgrp").get( async(req,res)=>{

    StudentGrp.find().then((studentgrp)=>{
        res.json(studentgrp);
    }).catch((err)=>{
        console.log(err);
    });

});

//Assign a panel group
router.route('/assign/:id').post(async(req, res)=>{

    let stdGrpId = req.params.id;

    const assignPanel = req.body.assignpanel;
    try {
        const updatePanel = await StudentGrp.findOne({_id:stdGrpId});
        updatePanel.assignpanel = assignPanel;
        const assigned = await updatePanel.save();

    if(assigned){
        res.json("You have assigned a panel to a student group");
    }
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;