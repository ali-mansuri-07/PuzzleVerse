const express = require('express');
const Question = require('../models/Question');
const router = express.Router();

//creating a new get request to display the questions at /api/question/getquestionset
router.get('/getquestionset', async (req, res) => {
    const questions = await Question.find({});
    res.send(questions);
})

router.get('/getquestionset/:id', async (req, res) => {
    const { id } = req.params;
    const question = await Question.findById(id);
    res.send(question);
})

module.exports = router;