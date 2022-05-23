const router = require("express").Router();
// const Staff = require("../models/Staff");

// Retrive the staff details
router.route("/view").get( async(req,res)=>{

    Staff.find().then((staffs)=>{
        res.json(staffs);
    }).catch((err)=>{
        console.log(err);
    });

});

// Update the staff member
router.route("/edit/:id").put( async(req,res)=>{

    try{
        const staff = await Staff.findById(req.params.id);

        await staff.updateOne({ $set:req.body});
        res.status(200).json("Staff member has been updated, Successfully!");

   }catch(err){
       res.status(500).json(err);
   }
})

// Delete the panel
router.route("/delete/:id").delete( async(req,res)=>{

    try{
        const staff = await Staff.findById(req.params.id);
            await staff.deleteOne();
            res.status(200).json("The staff member has been deleted, Successfully!")
    
    }catch(err){
        res.status(500).json(err);
    }
});

// module.exports = router;