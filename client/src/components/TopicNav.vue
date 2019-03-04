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
