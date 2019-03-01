<template lang="html">
  <div>
    <h2>{{ item.species }}</h2>
    <img :src="item.picture" alt="no image available">
  </div>
</template>

<script>
export default {
  name: "TopicItem",
  props: ["item"],
  methods(){

  }

}
</script>

<style lang="css" scoped>
</style>
