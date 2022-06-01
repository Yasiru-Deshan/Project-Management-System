const router = require("express").Router();
const Student = require("../models/Student");

// Retrive the student details
router.route("/view").get( async(req,res)=>{
    try {
        const student = await Student.find();
    
        res.json({
            "student": student
        });
        
    } catch (error) {
        res.status(400).json(error);
    }

});

// Retrieve specific student member
router.route('/edit/:id').get(async(req, res) => {

    const id = req.params.id;

    try{
        const staff = await Student.findOne({_id:id});
        res.json(staff);
        
    }catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
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

module.exports = router;