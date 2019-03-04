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
        const catQuestions = db.collection('big_cat_questions');
        const mathQuestions = db.collection('math_questions');
        const sharksRouter = createRouter(sharksCollection);
        const sharkQuestionsRouter = createRouter(sharkQuestions);
        const bigcatsRouter = createRouter(bigcatsCollection);
        const catQuestionsRouter = createRouter(catQuestions);
        const mathQuestionsRouter = createRouter(mathQuestions);
        app.use('/api/sharks', sharksRouter);
        app.use('/api/shark_questions',sharkQuestionsRouter);
        app.use('/api/big_cats', bigcatsRouter);
        app.use('/api/big_cat_questions', catQuestionsRouter);
        app.use('/api/math_questions', mathQuestionsRouter);

    })
.catch(console.err);

app.listen(3000, function (){
    console.log(`listening on port ${this.address().port}`);
})
