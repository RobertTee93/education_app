<template lang="html">
  <div>
    <start-page></start-page>
  </div>
</template>

<script>
import StartPage from "./components/StartPage.vue"
import { eventBus} from "./main.js";
export default {
  name: "app",
  data(){
    return {
      topicItems: [],
      selectedItem: null
    }
  },
  mounted(){

  },
  components: {
    StartPage
  }
}
</script>

<style lang="css" scoped>
</style>
