<template lang="html">
  <div>
    <h2 v-if="questionCounter < 6"> Current Score: <span>{{ this.score }}</span></h2>
    <button id="quiz-start" v-if="!allQuestions" v-on:click="fetchQuestions">Start Quiz</button>
    <question v-if="currentQuestion" :answers="currentAnswers" :question="currentQuestion" :counter="questionCounter" :score="score"></question>
  </div>

</template>

<script>
import Question from "./Question.vue"
import { eventBus } from "../main.js"
export default {
  name: "TopicQuiz",
  data(){
    return {
      allQuestions: null,
      currentQuestions: [],
      currentAnswers: [],
      questionCounter: 0,
      score: 0,
      currentQuestion: null
    }
  },
  props: ["categorySelected"],
  methods: {
    fetchQuestions(){
      fetch(`http://localhost:3000/api/${this.categorySelected}_questions`)
      .then(results => results.json())
      .then(questions => this.allQuestions = questions)
      .then(() => {
        this.questionCounter = 0
        this.getCurrentQuestions()
        this.getNextQuestion()
      });

      eventBus.$on("start-quiz", () => {
        this.questionCounter = 0
      })

      eventBus.$on("next-question",() =>{
       this.getNextQuestion()
     })
      eventBus.$on("correct-answer",() =>{
        if (this.questionCounter < 6){
          this.score += 1
          this.questionCounter += 1
          this.checkIfFinished()
        }

     })
      eventBus.$on("wrong-answer",() =>{
        if (this.questionCounter < 6){
          this.questionCounter += 1
          this.checkIfFinished()
        }
     })

    },
    getCurrentQuestions(){
      while (this.currentQuestions.length < 6){
        const question = this.allQuestions[Math.floor(Math.random()*this.allQuestions.length)]
        if (!this.currentQuestions.includes(question)){
          this.currentQuestions.push(question)
        }
      }
    },
    getCurrentAnswers(){
      let answersArray = []
      answersArray = this.currentQuestion.incorrect_answers
      answersArray.push(this.currentQuestion.correct_answer)
      this.shuffleAnswers(answersArray)
      this.currentAnswers = answersArray
    },
    getNextQuestion(){
      if (this.questionCounter < 6){
        this.currentQuestion = this.currentQuestions.pop()
        this.getCurrentAnswers()
        eventBus.$emit("new-answer")
      }
    },
    checkIfFinished(){
      if (this.questionCounter === 6){
        eventBus.$emit("quiz-finished")
      }
    },
    shuffleAnswers(array){
      for (let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  },
  components: {
    Question
  }
}

</script>

<style lang="css" scoped>

h2 {
  font-size: 70px;
  margin: 0;
}

div {
  text-align: center;
}

#quiz-start {
  margin-top: 50px;
  height: 350px;
  width: 750px;
  font-size: 100px;
  background-color: #ff0740;
  box-shadow: 0px 9px 17px black;
  border: black 1px solid;
  border-radius: 5px;
  text-shadow: -1px 1px 9px black;
  color: white;
}

#quiz-start:hover {
  	background-color: #84f501;
  	cursor: -webkit-grab; cursor: grab;
}

#quiz-start:active {
  background-color: #af3027;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

span {
  color: #84f501;
}

</style>
