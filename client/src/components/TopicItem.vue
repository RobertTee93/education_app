<template lang="html">
<div>
  <div v-on:click="handleClick">
    <h2>{{ item.species }}</h2>
    <img :src="item.picture" alt="no image available">
  </div>
  <button v-on:click="startQuiz">Start Quiz</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js"
export default {
  name: "TopicItem",
  props: ["item"],
  methods: {
    handleClick(){
      eventBus.$emit("item-clicked", this.item)
    },
      startQuiz(){
        eventBus.$emit("start-quiz")
      }
  }

}
</script>

<style lang="css" scoped>

img {
  width: 300px;
}

</style>
