<template lang="html">
  <div id="myMap"></div>
</template>

<script>
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'TopicMap',
  data(){
    return {
      map: null,
      tileLayer: null,
      bounds: null,
      marker: null
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  props: ["item"],
  mounted(){
    this.getMap()
    this.getLayers()
    this.getMarker(this.item.markers)


  },
  methods: {
    getMap(){
      this.map = L.map('myMap', {
        center: [0, 0],
        zoom: 1,
        dragging: true,
        scrollWheelZoom: true
      })

    },
    getLayers(){
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 1,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoicm9iZXJ0dGVlOTMiLCJhIjoiY2pzdWV0czNyMTgzNTN5czlyNXU4eWlwOCJ9.BIJ1I3XmHx6ePMuPjPC88Q',
    noWrap: true
      }).addTo(this.map);
    },
    getMarker(markers){
      for (let marker of markers){
       L.marker(marker).addTo(this.map).bindPopup(this.item.species).openPopup();
      }
    }
  }
}
</script>

<style lang="css" scoped>

#myMap {
  height: 430px;
  width: 600px;
  border-radius: 1000px;
  background-color: #72b6e7;
  border: black solid 2px;
  box-shadow: 0px 9px 20px 6px black;
}

</style>
