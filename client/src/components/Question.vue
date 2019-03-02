<template lang= "html">
  <div>
    <p v-if="!quizFinished">{{question.question}}</p>
    <p v-if="correctAnswer === null && !quizFinished" v-for="answer in answers" v-on:click="checkAnswer(answer)">{{answer}}</p>
    <p v-if="correctAnswer && !quizFinished">Correct!</p>
    <p v-if="correctAnswer === false && !quizFinished">Sorry Wrong Answer the correct Answer was {{ question.correct_answer }}!</p>
    <button v-if="currentAnswer && !quizFinished" v-on:click="nextQuestion">Next Question</button>
    <p v-if="quizFinished">You scored {{ score }} out of 6! Well Done!</p>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: "Question",
  props: ["question", "answers", "counter", "score"],
  data(){
    return {
      correctAnswer: null,
      currentAnswer: null,
      quizFinished: false
    }
  },
  methods:{
    nextQuestion(){
      eventBus.$emit("next-question")
      this.correctAnswer = null;
      eventBus.$on("quiz-finished", () => {
        this.quizFinished = true
      })
      this.currentAnswer = null
    },
    checkAnswer(answer){
      this.currentAnswer = answer
      if (answer === this.question.correct_answer){
        this.correctAnswer = true
        eventBus.$emit("correct-answer")
      } else {
        this.correctAnswer = false
        eventBus.$emit("wrong-answer")
      }
      // this.nextQuestion()
    }
  }
}
</script>

<style scoped>

</style>
