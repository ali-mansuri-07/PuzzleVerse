const mongoose = require('mongoose');
const questions = require('./questions');
const Question = require('../models/Question');

mongoose.connect('mongodb+srv://mansurialihussain51:JrphUAUmYDjBaLNt@puzzle-cluster.zua8s0z.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

const db = mongoose.connection;
db.on("error", console.error.bind(console, ("connection error")));
db.once("open", () => {
    console.log("database connected");
});

//adding question from the questions file to our database

const seedDb = async () => {
    //delete previous saved question
    await Question.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const q = new Question({
            sno: i,
            title: `${questions[i].title}`,
            question: `${questions[i].question}`,
            hint: `${questions[i].hint}`,
            answer: `${questions[i].answer}`
        })
        await q.save();
    }
}

//function to close the connection afterwards
seedDb().then(() => {
    mongoose.connection.close();
});