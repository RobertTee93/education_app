<template lang= "html">
  <div>
    <p id="quiz-question" v-if="!quizFinished">{{question.question}}</p>
    <p class="answers" v-if="correctAnswer === null && !quizFinished" v-for="answer in answers" v-on:click="checkAnswer(answer)">{{answer}}</p>
    <p class="answer correct" v-if="correctAnswer">Correct!</p>
    <p class="answer wrong" v-if="correctAnswer === false">Sorry Wrong Answer the correct Answer was {{ question.correct_answer }}!</p>
    <button id="next-question" v-if="currentAnswer && !quizFinished" v-on:click="nextQuestion">Next Question</button>
    <p id="quiz-result" v-if="quizFinished">You scored {{ score }} out of 6! Well Done!</p>
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

#quiz-question {
  width: 100%;
  text-align: center;
  font-size: 50px;
  margin-top: 0;
}

.answers {
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 50px 0;
  width: 500px;
  background-color: #ff0740;
  box-shadow: 0px 9px 17px black;
  border: black 1px solid;
  border-radius: 5px;
  font-size: 30px;
  text-shadow: -1px 1px 9px black;
  color: white;
}

.answers:hover {
  	background-color: #84f501;
  	cursor: -webkit-grab; cursor: grab;
}

.answers:active {
  background-color: #af3027;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.answer {
  width: 100%;
  font-size: 40px;
  font-weight: bold;
}

.correct {
  color: #01ff01;
  text-shadow: 1px 1px 6px black;
}

.wrong {
  color: #f90f0f;
  text-shadow: 1px 1px 6px black;
}

#next-question {
  	width: 250px;
  	height: 80px;
  	background-color: #ff0740;
  	box-shadow: 0px 9px 17px black;
  	border: black 1px solid;
  	border-radius: 5px;
  	font-size: 30px;
  	text-shadow: -1px 1px 9px black;
  	color: white;
  	margin: 10px 5px;
}

#next-question:hover {
	background-color: #84f501;
	cursor: -webkit-grab; cursor: grab;
}

#next-question:active {
  background-color: #af3027;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#quiz-result {
  color: #01ff01;
  text-shadow: 1px 1px 6px black;
  font-size: 100px;
  margin-top: 0;
}


div {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

p {
  display: block;
  text-align: center;
}


</style>
