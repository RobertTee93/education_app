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
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  props: ["item"],
  mounted(){
    this.getBounds()
    this.getMap()
    this.getLayers()
    this.getMarker(this.item.markers)
    this.map.fitBounds(this.bounds.getBounds())
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
        console.log(marker);
       L.marker(marker).addTo(this.map)
      }
    },
    getBounds(){
      this.bounds = this.item.markers
      // const corner1 = L.latLng(79.41624, -129.375)
      // const corner2 = L.latLng(-79.370503, 168.856312)
      // this.bounds = L.latLngBounds(corner1, corner2)
    },
    setControls(){
       layerControl = L.control.layers(null, mapOverlays, {position:'bottomcenter'}).addTo(this.map);
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
