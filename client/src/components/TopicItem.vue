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

div {
  padding: 20px;
  border: 5px solid #00a9f4;
  box-shadow: 0px 4px 20px black;
  margin: 30px 10px;
  text-align: center;
  background-color: #333;
  color: white;
  text-shadow: -1px 1px 9px black;
  border-radius: 10px;
}

div:hover {
  cursor: -webkit-grab; cursor: grab;
  animation: grow .5s ease-out forwards;
}

img {
  width: 350px;
}

@keyframes grow {
  0% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0px 4px 20px black;
  }
  100% {
    opacity: 1;
    transform: scale(1.05);
    box-shadow: 0px 18px 20px black;
  }
}

</style>
