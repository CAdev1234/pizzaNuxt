<template>
  <div id="map" style="height:600px;width:100%"></div>
</template>
<script>
import eventBus from '~/plugins/eventBus.js'
export default {
  props: {
    positions: Array,
  },
  
  data() {
    return {
      markerImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      hoverImage: "~/assets/images/pizza.png",
      map: null,
      markers: []
    }
  },

  mounted() {
    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: Number(this.positions[0].lat), lng: Number(this.positions[0].lng) },
      zoom: 12,
      gestureHandling: "greedy"
    })
    for (let index = 0; index < this.positions.length; index++) {
      this.markers[index] = new window.google.maps.Marker({
        position: {
          lat: Number(this.positions[index].lat),
          lng: Number(this.positions[index].lng)
        },
        map: this.map,
        icon: this.markerImage
      })
      this.markers[index].addListener("click", ()=>{
        window.location.href = "/menu"
      })
      google.maps.event.addListener(this.markers[index], "mouseover", function() {
        console.log("hover event")
      })
      google.maps.event.addListener(this.markers[index], "mouseout", function() {
      })
    }
    eventBus.$on("moveToOtherPostionInMap", (currentPosition)=>{
      var newCenter = new window.google.maps.LatLng(currentPosition.lat, currentPosition.lng)
      this.map.panTo(newCenter)
    })
  },
}
</script>