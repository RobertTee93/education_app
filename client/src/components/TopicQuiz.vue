<template lang="html">
  <button v-on:click="fetchQuestions">Start Quiz</button>
</template>

<script>
// import Question from "./Question.vue"
import { eventBus } from "../main.js"
export default {
  name: "TopicQuiz",
  data(){
    return {
      questions: null,
      score: 0,
      current_question: null
    }
  },
  props: ["categorySelected"],
  methods: {
    fetchQuestions(){
      fetch(`http://localhost:3000/api/${this.categorySelected}_questions`)
      .then(results => results.json())
      .then(questions => this.questions = questions)
    }
  }
}

</script>

<style lang="css" scoped>
</style>
