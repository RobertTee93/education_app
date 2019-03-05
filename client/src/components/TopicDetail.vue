<template lang="html">
  <div class="topic">
    <div id="species">
    <h1>Species: {{ item.species }}</h1>
    </div>
    <img :src="item.picture" alt="no image available">
    <div id="facts">
    <p><span>Fact:</span> {{ item.fact }}</p>
    <p><span>Size:</span> {{ item.size }}</p>
    <p><span>Diet:</span> {{ item.diet }}</p>
    <p><span>Habitat:</span> {{ item.habitat }}</p>
    </div>
    <div id="locations">
    <h2>World Locations</h2>
    </div>
    <topic-map :item="item"></topic-map>
    <button v-on:click="resetSelected">Show all</button>

  </div>
</template>

<script>
import TopicMap from "./TopicMap.vue";
import { eventBus } from "../main.js";
export default {
  name: "TopicDetail",
  props: ["item"],
  methods: {
    resetSelected() {
      eventBus.$emit("reset-selected");
    }
  },
  components: {
    TopicMap
  }
};
</script>

<style lang="css" scoped>
img {
  width: 400px;
  border: rgba(27, 185, 213, 0.783) 4px solid;
  border-radius: 5px;
  background-color: aquamarine;
  position: center;
  margin: 10px;
  box-shadow: 0px 10px 20px 7px black;
}

#facts span {
  font-size: 30px;
  text-decoration: underline;
  display: block;
}

#facts {
  z-index: 100;
  color: black;
  font-size: 25px;
  font-weight: bold;
  background: rgba(222, 210, 210, 0.564);
  width: 80%;
  border: rgba(27, 185, 213, 0.783) 4px solid;
  border-radius: 5px;
  margin-top: 35px;
  padding: 5px;
}

#locations {
  border-radius: 5px;
  margin: 10px;
  font-size: 30px;
  color:rgba(234, 244, 54, 0.893);
  text-shadow: 5px 5px rgb(2, 28, 48);
}

#species {
  width: fit-content;
  border-radius: 5px;
  margin: 10px;
  font-size: 30px;
  color:rgba(234, 244, 54, 0.893);
  text-shadow: 5px 5px rgb(2, 28, 48);
}

.topic{
  display:flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

button{
	width: 250px;
	height: 80px;
	background-color: #03A9F4;
	box-shadow: 0px 9px 17px black;
	border: black 1px solid;
	border-radius: 5px;
	font-size: 30px;
	text-shadow: -1px 1px 9px black;
	color: white;
	margin: 10px 5px;
  margin-top: 30px;
}
button:hover {
	background-color: #07ff24;
	cursor: -webkit-grab; cursor: grab;
}

button:active {
  background-color: #af3027;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

h1 {
  margin: 0;
}
</style>
