<template lang="html">
  <div>
    <h1>Species: {{ item.species }}</h1>
    <img :src="item.picture" alt="no image available">
    <p>Fact: {{ item.fact }}</p>
    <p>Size: {{ item.size }}</p>
    <p>Diet: {{ item.diet }}</p>
    <p>Habitat: {{ item.habitat }}</p>
    <topic-map :item="item"></topic-map>
    <button v-on:click="resetSelected">Show all</button>
  </div>
</template>

<script>
import TopicMap from "./TopicMap.vue"
import { eventBus } from "../main.js"
export default {
  name: "TopicDetail",
  props: ["item"],
  methods: {
    resetSelected(){
      eventBus.$emit("reset-selected")
    }
  },
  components: {
    TopicMap
  }
}
</script>

<style lang="css" scoped>

img {
  width: 300px;
}

</style>
