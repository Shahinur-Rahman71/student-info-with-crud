const router = require('express').Router();
const Student = require('../models/studentModel')

// get all student_info
router.get('/students', async (req, res) => {
    try {
        const alldata = await Student.find();        
        res.status(200).json(alldata);

    } catch (error) {
        res.status(500).json(error)
    }
})

// add student_info
router.post('/students', async (req, res ) => {
    try {
        const {name, email, phone, dateOfBirth} = req.body;
        const newStudent = new Student({
            name, email, phone, dateOfBirth
        });

        const student = await newStudent.save();
        res.status(200).json(student)

    } catch (error) {
        res.status(500).json(error)
    }
})

// update student_info
router.route('/stdupdate/:id').put( async (req, res) => {
    try {
        const {name, email, phone, dateOfBirth} = req.body;

        await Student.findOneAndUpdate({_id: req.params.id}, {
            name, email, phone, dateOfBirth
        })
       
        res.status(200).json({msg: 'Student_info Updated !!'});

    } catch (error) {
        res.status(500).json(error)
    }
})

// delete student_info
router.route('/stddelete/:id').delete( async (req, res) => {
    try {
        await Student.findOneAndDelete(req.params.id);
        res.status(200).json({msg: 'Student_info Deleted !!'});

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;