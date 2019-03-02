<template lang="html">
  <div>
    <h2 v-if="questionCounter < 6"> Current Score: {{ this.score }}</h2>
    <button v-if="!allQuestions" v-on:click="fetchQuestions">Start Quiz</button>
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
        this.getCurrentQuestions()
        this.getNextQuestion()
      });
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
    }
  },
  components: {
    Question
  }
}

</script>

<style lang="css" scoped>
</style>
