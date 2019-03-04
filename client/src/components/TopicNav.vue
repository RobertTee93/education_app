<template lang="html">
	<div id="topic-nav">
		<button v-on:click="HomePage()">Home</button>
		<button v-on:click="fetchDataSharks()">Sharks</button>
		<button v-on:click="fetchDataBigCats()">Big Cats</button>
		<button v-on:click="startMathQuiz()">Math Quiz</button>
	</div>
</div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
	props: ["sharks", "big_cats"],
	methods: {
		fetchDataSharks(){
			fetch("http://localhost:3000/api/sharks")
			.then(res => res.json())
			.then(sharks => eventBus.$emit('topic', sharks));
		},
		fetchDataBigCats(){
			fetch("http://localhost:3000/api/big_cats")
			.then(res => res.json())
			.then(big_cats => eventBus.$emit('topic', big_cats));
		},

		startMathQuiz(){
		eventBus.$emit('math-quiz');
		},

		HomePage(){
			eventBus.$emit('home-page')
		}

	}
}
</script>

<style lang="css" scoped>

div {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 20px;
}

button {
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
}

button:hover {
	background-color: #ff0740;
	cursor: -webkit-grab; cursor: grab;
}

button:active {
  background-color: #af3027;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>
