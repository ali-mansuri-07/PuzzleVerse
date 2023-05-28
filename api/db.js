const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/puzzle';
const uri = 'mongodb+srv://mansurialihussain51:JrphUAUmYDjBaLNt@puzzle-cluster.zua8s0z.mongodb.net/'
// const uri = process.env.DATABASE_URL

const connectToMongo = () => {
    mongoose.connect(uri, () => {
        console.log('mongodb connected');
    })
}

module.exports = connectToMongo;