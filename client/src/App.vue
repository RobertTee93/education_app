<template lang="html">
  <div>
    <topic-nav></topic-nav>

    <start-page v-if="!topicItems && !quizStarted"></start-page>

    <topics-grid v-if="!selectedItem && !quizStarted && topicItems" :topicItems="topicItems"></topics-grid>

    <topic-detail v-if="selectedItem && !quizStarted" :item="selectedItem"></topic-detail>

    <topic-quiz v-if="categorySelected" :categorySelected="categorySelected"></topic-quiz>

  </div>

</template>

<script>
import TopicQuiz from "./components/TopicQuiz.vue"
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
      selectedItem: null,
      quizStarted: false,
      categorySelected: null
    }
  },
  mounted(){
    eventBus.$on('topic', (topic) => {
      this.topicItems = topic
      this.selectedItem = null
      this.resetQuiz();
    });

    eventBus.$on("item-clicked", (item) => {
      this.selectedItem = item
    });

    eventBus.$on("reset-selected", () => {
      this.selectedItem = null;
    });

    eventBus.$on("start-quiz", (category)=>{
      this.quizStarted = true;
      this.categorySelected = category
    });

    eventBus.$on("topic-selected", () => {
      this.resetQuiz()
    });

    eventBus.$on("math-quiz", () => {
      this.categorySelected = "math";
      this.quizStarted = true;
    });

    eventBus.$on("home-page", () => {
      this.resetQuiz ();
      this.topicItems = false;
      this.selectedItem = null;
    })



  },
  components: {
    TopicNav,
    StartPage,
    TopicsGrid,
    TopicDetail,
    TopicQuiz
  },
  methods: {
    resetQuiz(){
      this.quizStarted = false
      this.categorySelected = null
    }
  }

}
</script>

<style lang="css" scoped>
</style>
