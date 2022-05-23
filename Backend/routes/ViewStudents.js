const router = require("express").Router();
// const Student = require("../models/Student");

// Retrive the student details
router.route("/view").get( async(req,res)=>{

    Student.find().then((student)=>{
        res.json(student);
    }).catch((err)=>{
        console.log(err);
    });

});

// Update the student member
router.route("/edit/:id").put( async(req,res)=>{

    try{
        const student = await Student.findById(req.params.id);

        await student.updateOne({ $set:req.body});
        res.status(200).json("Student has been updated, Successfully!");

   }catch(err){
       res.status(500).json(err);
   }
})

// Delete the student
router.route("/delete/:id").delete( async(req,res)=>{

    try{
        const student = await Student.findById(req.params.id);
            await student.deleteOne();
            res.status(200).json("The student has been deleted, Successfully!")
    
    }catch(err){
        res.status(500).json(err);
    }
});

// module.exports = router;