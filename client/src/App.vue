<template lang="html">
  <div>
    <topic-nav></topic-nav>

  </div>

</template>

<script>
import { eventBus} from "./main.js";
import TopicNav from "./components/TopicNav.vue"
export default {
  name: "app",
  data(){
    return {
      topicItems: [],
      selectedItem: null
    }
  },
  mounted(){
    eventBus.$on('sharks', (sharks) => {
      this.topicItems = sharks
    });
  },
  components: {
    TopicNav
  }

}
</script>

<style lang="css" scoped>
</style>
