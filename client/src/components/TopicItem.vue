<template lang="html">
  <div v-on:click="handleClick">
    <h2>{{ item.species }}</h2>
    <img :src="item.picture" alt="no image available">
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
    }
  }

}
</script>

<style lang="css" scoped>
</style>
