<template lang="html">
  <div>
    <topic-nav></topic-nav>

    <start-page v-if="!topicItems"></start-page>

    <topics-grid v-if="!selectedItem" :topicItems="topicItems"></topics-grid>

    <topic-detail v-if="selectedItem" :item="selectedItem"></topic-detail>

  </div>

</template>

<script>
import TopicDetail from "./components/TopicDetail.vue"
import TopicsGrid from "./components/TopicsGrid.vue"
import StartPage from "./components/StartPage.vue"
import { eventBus} from "./main.js";
import TopicNav from "./components/TopicNav.vue"
export default {
  name: "app",
  data(){
    return {
      topicItems: null,
      selectedItem: null
    }
  },
  mounted(){
    eventBus.$on('sharks', (sharks) => {
      this.topicItems = sharks
    });

    eventBus.$on("item-clicked", (item) => {
      this.selectedItem = item
    });

    eventBus.$on("reset-selected", () => {
      this.selectedItem = null;
    })

  },
  components: {
    TopicNav,
    StartPage,
    TopicsGrid,
    TopicDetail
  }

}
</script>

<style lang="css" scoped>
</style>
