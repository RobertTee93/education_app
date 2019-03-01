<template lang="html">
  <div>
    <topic-nav></topic-nav>
    <start-page></start-page>
  </div>

</template>

<script>
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
    StartPage
  }

}
</script>

<style lang="css" scoped>
</style>
