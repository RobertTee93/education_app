<template lang= "html">
  <div>
    <p>{{question.question}}</p>
    <p v-if="correctAnswer === null" v-for="answer in answers" v-on:click="checkAnswer(answer)">{{answer}}</p>
    <p v-if="correctAnswer">Correct!</p>
    <p v-if="correctAnswer === false">Sorry Wrong Answer the correct Answer was {{ question.correct_answer }}!</p>
    <button v-if="counter < 6 && currentAnswer" v-on:click="nextQuestion">Next Question</button>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: "Question",
  props: ["question", "answers", "counter"],
  data(){
    return {
      correctAnswer: null,
      currentAnswer: null
    }
  },
  methods:{
    nextQuestion(){
      eventBus.$emit("next-question")
      this.correctAnswer = null;
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
