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
      window.scrollTo(0, 0)
    });

    eventBus.$on("item-clicked", (item) => {
      this.selectedItem = item
      window.scrollTo(0, 0)
    });

    eventBus.$on("reset-selected", () => {
      this.selectedItem = null;
      window.scrollTo(0, 0)
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

<style lang="css">

* {
  font-family: 'Laila', serif;
}

body {
    background-color: #30f138;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    background: url(./assets/Background-image.jpg);
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

</style>
