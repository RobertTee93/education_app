<template lang="html">
  <div>
    <h1>{{ item.species }}</h1>
    <img :src="item.picture" alt="no image available">
    <p>{{ item.fact }}</p>
    <p>{{ item.size }}</p>
    <p>{{ item.diet }}</p>
    <p>{{ item.population }}</p>
    <p>{{ item.location }}</p>
    <button v-on:click="resetSelected">Show all</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js"
export default {
  name: "TopicDetail",
  props: ["item"],
  methods: {
    resetSelected(){
      eventBus.$emit("reset-selected")
    }
  }
}
</script>

<style lang="css" scoped>
</style>
