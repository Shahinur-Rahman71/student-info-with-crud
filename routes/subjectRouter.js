const router = require('express').Router();
const Subject = require('../models/subjectModel')

// get all subject_info
router.get('/subjects', async (req, res) => {
    try {
        const alldata = await Subject.find();        
        res.status(200).json(alldata);

    } catch (error) {
        res.status(500).json(error)
    }
})

// add subject_info
router.post('/subjects', async (req, res ) => {
    try {
        const {name, student} = req.body;
        const newSubject = new Subject({
            name, student
        });

        const subject = await newSubject.save();
        res.status(200).json(subject)

    } catch (error) {
        res.status(500).json(error)
    }
})

// update subject_info
router.route('/subupdate/:id').put( async (req, res) => {
    try {
        const {name, student} = req.body;

        await Subject.findOneAndUpdate({_id: req.params.id}, {
            name, student
        })
       
        res.status(200).json({msg: 'Subject_info Updated !!'});

    } catch (error) {
        res.status(500).json(error)
    }
})

// delete subject_info
router.route('/subdelete/:id').delete( async (req, res) => {
    try {
        await Subject.findOneAndDelete(req.params.id);
        res.status(200).json({msg: 'Subject_info Deleted !!'});

    } catch (error) {
        res.status(500).json(error)
    }
    
})

module.exports = router;