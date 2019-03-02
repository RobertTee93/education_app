<template lang="html">
  <div>
    <button v-on:click="fetchQuestions">Start Quiz</button>

  </div>

</template>

<script>
// import Question from "./Question.vue"
import { eventBus } from "../main.js"
export default {
  name: "TopicQuiz",
  data(){
    return {
      allQuestions: null,
      currentQuestions: [],
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
      })
    },
    getCurrentQuestions(){
      while (this.currentQuestions.length < 6){
        const question = this.allQuestions[Math.floor(Math.random()*this.allQuestions.length)]
        this.allQuestions.pop(question)
        this.currentQuestions.push(question)
      }
    },
    getNextQuestion(){
      this.currentQuestion = this.currentQuestions.pop()
    }
  }
}

</script>

<style lang="css" scoped>
</style>
