<template>
  <div class="bg-white">
    <div  class ="mx-auto h-full flex justify-center items-center">
      <div id="content-area" class="w-full mt-10 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20">
        <div class="container mx-auto">
          <div class="w-full grid pl-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            <div class="cursor-pointer" v-for="(location, index) in locations" :key="index" @click="goToMenu()" @mouseover="activeLocationItem(index)" @mouseleave="inActiveLocationItem()">
              <div :class="{'border-active': isLocationItemActive[index]}">
                <div class="font-bold text-2xl uppercase">{{location.name}}</div>
                <button class="mt-2 py-2 px-auto w-8/12 text-center text-white font-bold text-xl bg-green-custom rounded-lg">ORDER ONLINE</button>
                <div class="mt-2 font-bold">{{location.phone}}</div>
                <div class="mt-2 w-10/12">{{location.address}}</div>
                <div class="mt-3 font-bold text-xl underline">HOURS</div>
                <div class="text-sm">MONDAY-SANDAY</div>
                <div class="text-sm">11:00 AM to 11:00 PM</div>
                <div class="mt-2 color-green-custom text-xl font-bold">DOWNLOAD MENU</div>
                <div class="mt-2 mb-10 font-bold text-xl underline">VIEW LOCATION</div>
              </div>
            </div>
          </div>

          <div v-if="isMapRender">
            <GoogleMap v-bind:positions="locations"/>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
    import { mapMutations } from 'vuex'
    import { mapState } from "vuex";
    import GoogleMap from '~/components/GoogleMap.vue'
    import eventBus from '~/plugins/eventBus.js'

    export default {
        components: {
            GoogleMap
        },
        head: {
            title: 'Menu',
            meta: [
                {
                    hid: 'menu',
                    name: 'menu',
                    content: 'menu'
                }
            ],
        },
        data() {
            return {
              isLocationItemActive: []
            }
        },
        mounted() {
            this.$store.dispatch('getStores');
        },
        computed: {
            locations() {
              return this.$store.getters.stores;
            },
            isMapRender() {
              if(this.$store.getters.stores.length != 0) {
                return true
              }
            }
        },
        methods: {
          activeLocationItem(index) {
            this.$set(this.isLocationItemActive, index, true)
            eventBus.$emit('moveToOtherPostionInMap', this.locations[index])
          },
          inActiveLocationItem() {
            for (let indexi = 0; indexi < this.locations.length; indexi++) {
              this.isLocationItemActive[indexi] = false
            }
          },
          goToMenu() {
            window.location.href = "/menu"
          }
        }

    }
</script>
<style scoped>
.border-active {
  border-color: red !important;
  border: dotted;
}
</style>