<template lang= "html">
    <div>
        <p>{{question.question}}</p>
        <p v-for="answer in question.incorrect_answers">{{answer}}</p>
        <button v-on:click="nextQuestion">Next Question</button>
    </div>
</template>

<script>
import {eventBus} from "../main.js"
    export default {
        name: "Question",
        props: ["question"],
    methods:{
        nextQuestion(){
            eventBus.$emit("next-question")
        }
    }
        
    }
</script>

<style scoped>

</style>