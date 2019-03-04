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
        const bigcatsCollection = db.collection('big_cats');
        const catQuestions = db.collection('cat_questions');
        const sharksRouter = createRouter(sharksCollection);
        const sharkQuestionsRouter = createRouter(sharkQuestions);
        const bigcatsRouter = createRouter(bigcatsCollection);
        const catQuestionsRouter = createRouter(catQuestions);
        app.use('/api/sharks', sharksRouter);
        app.use('/api/shark_questions',sharkQuestionsRouter);
        app.use('/api/big_cats', bigcatsRouter);
        app.use('/api/cat_questions',catQuestionsRouter);
    })
.catch(console.err);

app.listen(3000, function (){
    console.log(`listening on port ${this.address().port}`);
})
