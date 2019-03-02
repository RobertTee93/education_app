<template lang="html">
  
</template>

<script>
import Question from "./Question.vue"
export default {
  name: "TopicQuiz",
  data(){
    return {
      questions: null,
      score: 0,
      current_question: null
    }
  },
  methods: {
    fetchQuestions(){
      fetch("http://localhost:3000/api/shark_questions")
      .then(results => results.json())
      .then(questions => this.questions = questions)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
