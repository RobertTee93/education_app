const express = require('express');
const app = express();

const parser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(parser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
    .then((client) =>{
        const db = client.db('topics');
        const sharksCollection = db.collection('sharks');
        const sharkQuestions = db.collection('shark_questions');
        const sharksRouter = createRouter(sharksCollection);
        const sharkQuestionsRouter = createRouter(sharkQuestions);
        app.use('/api/sharks', sharksRouter);
        app.use('/api/shark_questions',sharkQuestions);
    })
.catch(console.err);

app.listen(3000, function (){
    console.log(`listening on port ${this.address().port}`);
})
