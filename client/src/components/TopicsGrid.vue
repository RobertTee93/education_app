<template lang="html">
    <div id="TopicsItems">
        <topic-item v-for="(item,index) in topicItems" :key="index" :item="item"/>
           
    </div>
</template>

<script>
import TopicItem from './TopicItem.vue'
export default {
    name: 'topicsGrid',
    props: ["topicItems"],
    components: {
        TopicItem
    }
    
};
</script>

<style scoped>
</style>