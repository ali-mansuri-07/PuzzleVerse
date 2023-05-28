const express = require('express')
const app = express()
const connectToMongo = require('./db');
const port = 5000
const cors = require('cors');
app.use(express.json());

connectToMongo();
//cors is used for cross origin requests from react 3000 to api 5000
app.use(cors());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/question', require('./routes/questionroute'));
app.use('/api/user', require('./routes/userroute'));

app.listen(port, () => {
    console.log('server connected');
})