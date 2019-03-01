<template lang="html">
  <div>
    <topic-nav></topic-nav>
    <start-page></start-page>
    <topics-grid :topicItems="topicItems"></topics-grid>
  </div>

</template>

<script>
import TopicsGrid from "./components/TopicsGrid.vue"
import StartPage from "./components/StartPage.vue"
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
    TopicNav,
    StartPage,
    TopicsGrid
  }

}
</script>

<style lang="css" scoped>
</style>
