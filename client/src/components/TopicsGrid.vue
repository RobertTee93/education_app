<template lang="html">
    <div id="TopicsItems">
        <topic-item v-for="(item,index) in topicItems" :key="index" :item="item"/>
  <button v-on:click="startQuiz(topicItems[0].category)">Start Quiz</button>
    </div>
</template>

<script>
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
      }
    }
    
};
</script>

<style scoped>
</style>