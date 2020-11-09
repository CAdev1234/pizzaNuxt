<template>
  <header class="bg-white w-full shadow-xs fixed top-0 left-0 z-30 bg-light-elevatedSurface dark:bg-dark-elevatedSurface border-light-border dark:border-dark-border lg:border-0 h-16 transition-colors duration-300 ease-linear">
    <nav class="mx-2 flex justify-center sm:mx-4 md:mx-5 lg:mx-5 xl:mx-6">
      <div class="container">
        <div class="relative flex h-16">

          <!-- Left hamburg button -->
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden md:hidden lg:hidden xl:hidden">
            <!-- Mobile menu button -->
            <button  @click="isOpen = !isOpen"  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
              <!-- Icon when menu is closed. -->
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg :class="isOpen ? 'hidden' : 'block'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- Icon when menu is open. -->
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg :class="isOpen ? 'block' : 'hidden'"  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
            <div class="flex-shrink-0 flex items-center">
              <img class="block lg:hidden h-8 w-auto" src="~/assets/images/pizza-garden-logo.png" alt="Pizza Garden  logo">
              <img class="hidden lg:block h-8 w-auto" src="~/assets/images/pizza-garden-logo.png" alt="Pizza Garden  logo">
            </div>
            <!-- main header buttons -->
            <div class="hidden sm:hidden md:hidden lg:flex xl:flex absolute inset-y-0 right-0  items-stretch">
              <a  v-for="(menu, index) in headerMenu" :key="index"  
                  v-bind:href="menu.link"
                  v-bind:class="{'color-green-custom': isHeaderLinkActive[index], 'text-gray-500': !isHeaderLinkActive[index]}"
                  class="ml-3 font-bold inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm leading-5 focus:color-green-custom active:color-green-custom hover:color-green-custom hover:border-gray-300 focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                {{menu.text}}
              </a>
              <div>
                <button class="ml-5 px-3 bg-green-custom text-white text-sm font-bold flex items-center justify-center h-16">ORDER NOW</button>
              </div>
            </div>
            <!-- right hamburg button-->
            <div class="absolute inset-y-0 right-0 items-center hidden sm:flex md:flex lg:hidden xl:hidden">
              <!-- Mobile menu button -->
              <button @click="isOpen = !isOpen"  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                <!-- Icon when menu is closed. -->
                <!-- Menu open: "hidden", Menu closed: "block" -->
                <svg :class="isOpen ? 'hidden' : 'block'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Icon when menu is open. -->
                <!-- Menu open: "block", Menu closed: "hidden" -->
                <svg :class="isOpen ? 'block' : 'hidden'"  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <!-- cart button in mobile -->
            <div class="absolute right-1 top-3 sm:hidden md:hidden lg:hidden xl:hidden">
              <i class="relative fa fa-shopping-cart text-black" style="font-size:35px" @click="showCartPartInMobile">
                <div v-if="numberInCart != 0" 
                    class="absolute top-0 right-0 bg-pink-600 text-white flex justify-center w-4 h-4 items-center py-auto" 
                    style="border-radius:50%;font-size:small">{{numberInCart}}</div>
              </i>
            </div>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.
        Menu open: "block", Menu closed: "hidden"
      -->
      <div :class="isOpen ? 'block' : 'hidden'" class="absolute top-15 w-full lg:hidden xl:hidden bg-white z-50">
        <div class="pt-2 pb-4 w-full">
          <a  v-for="(menu, index) in headerMenu" :key="index"  :href="menu.link" class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
            {{menu.text}}
          </a>
        </div>
      </div>


      <!-- Display cart in mobile view-->
      <div v-if="isCartPartInMobile" class="fixed top-15 w-full sm:hidden md:hidden lg:hidden xl:hidden">
        <Cart />
      </div>

    </nav>
  </header>
</template>

<script>
  import eventBus from '~/plugins/eventBus.js'
  import Cart from "~/components/Cart.vue";
  export default {
    data() {
      return {
          isOpen: false,
          headerMenu:[],
          isHeaderLinkActive: [],
          isCartPartInMobile: false
      }
    },
    components: {
      Cart
    },
    created() {
      this.$http.get("/api/catalog/header")
          .then((response) => {
              this.headerMenu = response
                  .data
                  .filter(i=>i.type=='header-menu').flatMap(i=>i.items)
                  .filter(i=>i.active)
                  .reverse()
              for (let indexj = 0; indexj < this.headerMenu.length; indexj++) {
                this.isHeaderLinkActive[indexj] = false
              }
              for (let index = 0; index < 7; index++) {
                var str_var = window.location.href.toString()
                if (str_var.indexOf(this.headerMenu[index].link) !== -1) {
                  this.$set(this.isHeaderLinkActive, index, true)
                  break
                }
              }
          })
          .catch((error) => { console.log(error) })
    },
    mounted() {
      eventBus.$on('closeCartInAppNavInMobile', () => {
        this.isCartPartInMobile = false
      })
    },
    computed: {
      numberInCart() {
        return this.$store.getters.cartCount
      }
    },
    methods: {
      showCartPartInMobile() {
        this.isCartPartInMobile = !this.isCartPartInMobile
      }
    }

    }
</script>


<style lang="scss" scoped>
  .header-top {
    width: 100%;
    position: fixed;
    top: 0;
    height: 85px;
    z-index: 10;
    box-shadow: 0 0 5px rgba(0,0,0,.5);
    transition: 0.4s;
    -webkit-transition: 0.4s;
  };


  #menu {
    width: 100%;
    text-align: center;
    top: 85px;
    position: fixed;
    box-shadow: 0 0 2px rgba(0,0,0,.5);
    background: #ffffff;
    z-index: 5;
  }
</style>
