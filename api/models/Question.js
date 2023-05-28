const mongoose = require('mongoose');
const { Schema } = mongoose;
//creating a question schema

const QuestionSchema = new Schema({
    sno: Number,
    title: String,
    question: String,
    hint: String,
    answer: String,
});

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;