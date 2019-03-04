<template lang="html">
  <div id="button-div">
    <div id="TopicsItems">
        <topic-item v-for="(item,index) in topicItems" :key="index" :item="item"/>
  </div>
  <button id="quiz-button" v-on:click="startQuiz(topicItems[0].category)">Quiz</button>
    </div>
</template>

<script>
import { eventBus } from "../main.js"
import TopicItem from './TopicItem.vue'
export default {
    name: 'topicsGrid',
    props: ["topicItems"],
    components: {
        TopicItem
    },
    methods: {
         startQuiz(category){
        eventBus.$emit("start-quiz", category)
        eventBus.$emit("quiz-started")
      }
    }

};
</script>

<style scoped>

#TopicsItems {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0px 50px;
}

#button-div {
  text-align: center;
}

#quiz-button {
  	width: 250px;
  	height: 80px;
  	background-color: #03A9F4;
  	box-shadow: 0px 9px 17px black;
  	border: black 1px solid;
  	border-radius: 5px;
  	font-size: 30px;
  	text-shadow: -1px 1px 9px black;
  	color: white;
    margin-bottom: 100px;
  }

#quiz-button:hover {
  	background-color: #ff0740;
  	cursor: -webkit-grab; cursor: grab;
  }

#quiz-button:active {
    background-color: #af3027;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

</style>
