
const practiceMern = require("../models/practice-model")

const ObjectId = require('mongodb').ObjectId;

exports.addPracticeMern = (req,res) => {
    try{
        const newPractice = new practiceMern({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            role:req.body.role,
            dob:req.body.dob,
            gender:req.body.gender,
            email:req.body.email,
         });
        
        const storePractce = newPractice.save()
        res.status(201).json({ message: 'User created successfully',storePractce });
    }catch(err){
        res.status(500).json({ message: 'Server error', err: err.message });
    }

}



exports.updatePractice = async (req, res) => {
  try {
    if (!req.body.id) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const objectId = req.body.id

    const updateFields = { ...req.body };

    delete updateFields.id;
    const updateprac = await practiceMern.findByIdAndUpdate(objectId, updateFields, { new: true });

    if (!updateprac) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User updated successfully", updateprac });
  } catch (err) {
    // Handle any unexpected errors
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


exports.getPractice = async(req,res) => {
try{
    const getpactice = await practiceMern.find()

    res.status(201).json({ message: 'User created successfully',getpactice });

    }catch(err){
    res.status(500).json({ message: 'Server error', err: err.message });
}
}


exports.deletepractice = (req,res) => {
    try{
    const docPractice = practiceMern.findByIdAndDelete(req.body.id)

    if (!docPractice) return  res.status(404).json({message: "id id not found"})
    res.status(201).json({message:"doc successfully deleted",docPractice})

    }catch(err){
        res.status(500).json({message:"something went ot worng"})
    }
}



