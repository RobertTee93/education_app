<template lang="html">
	<div id="topic-nav">
			<button v-on:click="fetchDataSharks()">Sharks</button>
		</div>
	</div>
</template>

<script>
import { eventBus } from '../main.js';


export default {
	props: ["sharks"],

methods: {
fetchDataSharks(){
  fetch("http://localhost:3000/api/sharks")
    .then(res => res.json())
    .then(sharks => eventBus.$emit('sharks', sharks));

}
}
}
</script>
