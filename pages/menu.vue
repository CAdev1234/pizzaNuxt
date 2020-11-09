<template>
  <div class="bg-white">
    <div class ="mx-auto h-full flex justify-center items-center">
      <div id="s-menu">
        <div class="container mx-auto">
           <div class="float-left">
            <div v-on:click="activeId=menuItem.mhash" 
                 v-for="(menuItem,index) in products.menu" :key="index" :data-menu="menuItem.id" 
                 class="sm"
                 :class="menuItem.mhash==activeId ?'active' :''">{{menuItem.name}}</div>
           </div>
        </div>
      </div>
      <div id="content-area" class="w-full mb-5 mt-20 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20">
        <div class="container mx-auto">
          <div class="w-full md:w-4/4 lg:w-3/4 lg:float-left xl:float-left">
            <div class="w-full">
              <!-- store location in mobile view -->
              <div class="flex px-7 py-3 sm:hidden md:hidden lg:hidden xl:hidden">
                <div class="w-2/3">
                  <div class="font-bold">LA RUOTA COQUITLAM</div>
                  <div>1168 The High St Coquitlam, BC V3B OC6</div>
                  <div class="font-bold">(604)474-1070</div>
                </div>
                <div class="w-1/3 pl-5 pt-9">
                  <button class="py-1 px-3 w-full font-bold text-center leading-4 text-white bg-gray-400">
                    <a href="/locations">Change Store</a>
                  </button>
                </div>
              </div>

              <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:mr-5 lg:mr-5 xl:mr-5">
                  <li class="col-span-1 flex flex-col bg-white  shadow p-5 text-center">
                    <div class="text-white font-bold bg-gray-400 h-full" style="font-size:20px;">CREATE YOUR OWN PIZZA</div>
                  </li>
                  <li class="col-span-1 flex flex-col bg-white shadow p-5 text-center">
                    <div class="text-white font-bold bg-gray-400 h-full" style="font-size:20px">HALF & HALF PIZZA</div>
                  </li>
              </div>
              <div class="md:mr-5 lg:mr-5 xl:mr-5" v-for="(menuItem, index) in products.menu" :key="index" :id="menuItem.mhash">
                <div class="mt-5" v-if="menuItem.mhash==activeId">
                  <ul class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                    <li class="col-span-1 flex flex-col  bg-white  shadow" v-for="(product,index) in menuItem.products" :key="index" >
                      <div class="flex-1 flex flex-col px-5 pt-6">
                        <img class="w-full flex-shrink-0 mx-auto bg-black" :src="product.picture" alt="">
                        <h3 class="mt-6 text-gray-900 text-lg uppercase leading-5">{{product.name}}</h3>
                        <dl class="mt-1 flex-grow flex flex-col justify-between">
                          <dd class="text-gray-500 text-sm leading-5">{{product.description}}</dd>
                          </dl>
                      </div>
                      <div class="px-5">
                        <div class="flex">
                          <div class="w-2/3 flex items-center border-gray-200">
                            <div class="text-sm leading-5 text-gray-700 font-medium border border-transparent hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                                style="width:100%">
                              <div class="w-full flex">
                                <select :id="product.phash" v-model="selectedSize[index]" 
                                        class="border rounded outline-none"
                                        style="padding:2px;width:70%">
                                  <option v-for="item in product.sizes" :key="item.code" :value="item" on>{{item.name}}</option>
                                </select>
                                <select id="quantity" 
                                        class="border rounded outline-none"
                                        style="padding:2px;margin-left:auto;width:25%">
                                  <option value="1" selected>1</option>
                                  <option value="1">2</option>
                                  <option value="1">3</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/3 flex items-center">
                            <a href="#" class="py-3 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                                style="margin-left: auto">
                              <span class="rounded-md shadow-sm">
                                <button @click="openOrderModal(product,index)"  type="button" 
                                        class="items-center py-1 px-2 border border-transparent text-sm leading-5  text-white btn-green-600  focus:outline-none  transition ease-in-out duration-150 font-bold">
                                  {{$t('menu.order')}}
                                </button>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden sm:block md:block lg:block xl:block md:w-full lg:w-1/4 lg:float-right xl:float-right">
            <div class="w-full">
              <cart/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ordering modal -->
    <div v-if="isOrderModal">
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
          <div class="absolute bg-white text-left overflow-hidden shadow-xl transform transition-all top-1/12 left-1/2 -translate-x-1/2 w-full sm:w-10/12 md:w-9/12 lg:8/12 xl:w-7/12 p-6">
            <div class="bg-white sm:flex md:flex lg:flex xl:flex w-full">
              <div class="w-full sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-5/12">
                <img class="w-full" :src="selectedItem.picture" alt="">
              </div>
              <div class="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 ml-auto">
                <h1 class="mt-5 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 font-bold text-xl">{{selectedItem.name}}</h1>
                <p>{{selectedItem.description}}</p>
                <div class="mt-5 flex items-center">
                  <div class="mr-3 font-bold">Quantity</div>
                  <div>
                    <select class="border rounded outline-none py-0 w-10">
                      <option value="1" selected>1</option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                    </select>
                  </div>
                </div>
                <div class="mt-5 font-bold text-xl">SIZE</div>
                <div class="flex items-center">
                  <input type="radio" class="form-radio" name="pizzaSizePrice">
                  <div class="ml-2"><b>Medium 12"</b> - $18.50</div>
                </div>
                <div class="flex items-center">
                  <input type="radio" class="form-radio" name="pizzaSizePrice">
                  <div class="ml-2"><b>Large 14"</b> - $18.50</div>
                </div>
                <div class="flex items-center">
                  <input type="radio" class="form-radio" name="pizzaSizePrice">
                  <div class="ml-2"><b>X-Large 18"</b> - $24.25</div>
                </div>
                <div class="flex items-center">
                  <input type="radio" class="form-radio" name="pizzaSizePrice">
                  <div class="ml-2"><b>Cauliflower Crust 10"</b> - $18.50</div>
                </div>
              </div>
            </div>
            <div>
              <div class="font-bold mt-3 text-xl">SAUCE</div>
              <div class="flex w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
                <select class="mr-2 py-0 h-9 w-1/2 bg-white outline-none border rounded">
                  <option v-for="(sauceType, index) in sauceTypes" :key="index">{{sauceType}}</option>
                </select>
                <select class="py-0 h-9 w-1/3 bg-white outline-none border rounded">
                  <option v-for="(sauceAmount, index) in sauceAmounts" :key="index">{{sauceAmount}}</option>
                </select>
              </div>

              <div class="flex items-center mt-3">
                <i v-if="!isCheeseTypes" class="fa fa-plus-circle mr-2 text-xl cursor-pointer"></i>
                <i v-if="isCheeseTypes" class="fa fa-minus-circle mr-2 text-xl cursor-pointer"></i>
                <span class="font-bold text-xl cursor-pointer" @click="showCheeseTypeList()">CHEESE</span>
              </div>
              <div v-if="isCheeseTypes">
                <div v-for="(cheeseType, index) in cheeseTypes" :key="index">
                  <div class="cheese-type md:flex lg:flex xl:flex w-full md:w-6/12 lg:w-6/12 xl:w-6/12 px-1">
                    <div class="mt-1 md:mt-0 lg:mt-0 xl:mt-0 w-full md:w-8/12 lg:w-8/12 xl:w-8/12 flex items-center">
                      <div>{{cheeseType}}</div>
                      <div class="ml-auto" 
                           v-bind:class="{'bg-green-custom': cheeseRegularSelected[index], 'bg-gray-400': !cheeseRegularSelected[index]}"
                           style="width:15px;border-radius:50%;height:15px"></div>
                    </div>
                    <div class="w-full md:w-3/12 lg:w-3/12 xl:w-3/12 flex ml-auto">
                      <button class="mr-1 text-white bg-green-custom py-1 px-5 w-full" @click="cheeseRegular(index)">Regular</button>
                      <button class="text-white bg-gray-400 py-1 px-5 w-full" @click="cheeseExtra(index)">Extra</button>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <hr class="w-8/12"/>
                  </div>
                </div>
              </div>


              <div class="mt-3 flex items-center" >
                <i v-if="!isVeggieToppings" class="fa fa-plus-circle mr-2 text-xl cursor-pointer"></i>
                <i v-if="isVeggieToppings" class="fa fa-minus-circle mr-2 text-xl cursor-pointer"></i>
                <div class="font-bold text-xl cursor-pointer" @click="showVeggieToppingsList()">ADD VEGGIE TOPPINGS</div>
              </div>

              <div v-if="isVeggieToppings">
                <div v-for="(veggieTopping, index) in veggieToppings" :key="index">
                  <div class="veggie-type md:flex lg:flex xl:flex w-full md:w-6/12 lg:w-6/12 xl:w-6/12 px-1">
                    <div class="mt-1 md:mt-0 lg:mt-0 xl:mt-0 w-full md:w-8/12 lg:w-8/12 xl:w-8/12 flex items-center">
                      <div>{{veggieTopping}}</div>
                      <div class="ml-auto" 
                           v-bind:class="{'bg-green-custom': veggieRegularSelected[index], 'bg-gray-400': !veggieRegularSelected[index]}"
                           style="width:15px;border-radius:50%;height:15px"></div>
                    </div>
                    <div class="w-full md:w-3/12 lg:w-3/12 xl:w-3/12 flex ml-auto">
                      <button class="mr-1 text-white bg-green-custom py-1 px-5 w-full" @click="veggieRegular(index)">Regular</button>
                      <button class="text-white bg-gray-400 py-1 px-5 w-full" @click="veggieExtra(index)">Extra</button>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <hr class="w-8/12"/>
                  </div>
                </div>
              </div>


              <div class="mt-3 flex items-center cursor-pointer">
                <i class="fa fa-plus-circle mr-2 text-xl"></i>
                <div class="font-bold text-xl">ADD MEAT TOPPINGS</div>
              </div>
              <div class="mt-3">
                <p class="text-sm">Extra Toppings:</p>
                <p class="text-sm">Favourite Toppings: 14" $1.75 | 18" $2.50 | 10" $1.75 Premium Toppings*: 14" $2.50 | 18" $3.75 | 10" $2.50</p>
              </div>
              <div class="flex mt-5 items-center justify-center">
                <button class="bg-gray-400 text-white font-bold p-3 mr-2 text-center" @click="closeOrderModal()">&#x3008; GO BACK</button>
                <button class="bg-green-custom text-white font-bold p-3" @click="addToCart()">ADD TO ORDER</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- checkout modal -->
    <div v-if="isCheckoutModal">
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
          <div class="absolute bg-white text-left overflow-hidden shadow-xl transform transition-all top-1/12 left-1/2 -translate-x-1/2 w-full sm:w-10/12 md:w-8/12 lg:8/12 xl:w-4/12 p-6 z-50">
            <div class="relative">
              <div class="text-center font-bold text-4xl leading-10">Do you want to add drinks and sides to your order?</div>
              <div class="mt-5 flex bg-gray-600 p-3 rounded-lg">
                <img class="w-3/12"
                      src="https://www.megabitepizza.com/images/products/f54317941da46839062c64da6dbe27b6629f74d75a29c05f7ea9054d.jpg"/>
                <div class="w-9/12 flex items-center justify-center">
                  <div>
                    <div class="text-white font-bold text-2xl">POP(CAN)</div>
                    <div class="text-white">POP 2L Bottle</div>
                    <div class="mt-2">
                      <button class="bg-white text-red-700 font-bold py-1 px-7 rounded-lg">ORDER</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-5 flex bg-gray-600 p-3 rounded-lg">
                <img class="w-3/12"
                      src="https://www.megabitepizza.com/images/products/9fba129bad6f7edaac9c0ad105b631859110858de04ea4d9cb8e5984.jpg"/>
                <div class="w-9/12 text-center">
                  <div class="text-white font-bold text-2xl">Rolles</div>
                  <div class="text-white px-2">Chipotle Chicken Parmesan, Hot Dog, or Spinach. Served with your choice of dipping sauce.</div>
                  <div class="mt-2">
                    <button class="bg-white text-red-700 font-bold py-1 px-7 rounded-lg">ORDER</button>
                  </div>
                </div>
              </div>
              <div class="mt-5 text-center">
                <a class="text-xl underline cursor-pointer" @click="goToCheckoutPage()">No thanks</a>
              </div>
              <div class="absolute top-0 right-0">
                <i class="fa fa-close text-black text-2xl cursor-pointer" @click="closeCheckoutModal()"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
    import eventBus from '~/plugins/eventBus.js'
    import Cart from "~/components/Cart.vue";
    import { mapMutations } from 'vuex'
    import { mapState } from "vuex";

    export default {
        components: {
            Cart
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
                activeId:'d0102d462eb3e21373b8f1d9ac220491a9c213cef28000083477cf7a',
                selectedSize:[],
                selectedQuantity:[],
                selectedItem: null,
                selectedIndex: null,
                sauceTypes: ["No Sauce", "Tomato Sauce", "Alfredo Sauce", "Pesto Sauce", "Olive Oil"],
                sauceAmounts: ["Normal", "Extra"],
                isCheeseTypes: false,
                cheeseTypes: ["Ricotta Cheese", "Fior di Latte*", "Grana Padano*", "Gorgonzola Cheese*", "Mozzarella Cheese*", "Vegan Cheese*"],
                cheeseRegularSelected: [],
                isVeggieToppings: false,
                veggieToppings: ["Roasted Red Peppers*", "Roasted Garlic", "Arugula*", "Kalamata Olives", "Red Onions", "Garlic", "Caramelized Onions", "Spinach", "Sun-Dried Tomatoes", "Pineapple", "Mushrooms", "Capers", "Artichoke", "Oyster Mushrooms, Baked Potatoes", "Thyme(no charge)", "Fresh Basil", "Grape Tomatoes", "Oregano(no charge)", "White Truffle Oil", "Pesto", "Crushed Dill"],
                veggieRegularSelected: [],
                isOrderModal: false,
                isCheckoutModal: false
            }
        },
        mounted() {
          this.$store.dispatch('getProducts');
          for (let indexi = 0; indexi < this.cheeseTypes.length; indexi++) {
            this.cheeseRegularSelected[indexi] = true
          }
          for (let indexj = 0; indexj < this.veggieToppings.length; indexj++) {
            this.veggieRegularSelected[indexj] = true
          }
          eventBus.$on('openCheckoutModal', () => {
            this.isCheckoutModal = true
          })
          if(window.innerWidth < 500) {
            this.isFixed = true
          }
          window.addEventListener('resize', () => {
            if(window.innerWidth < 500) {
              this.isFixed = true
            }else {
              this.isFixed = false
            }
          })
        },
        computed: {
          products() {
              return this.$store.getters.products;
          },

          //            ...mapState(["storedata"]),
          product() {
              return this.storedata.find(el => el.id === this.id);
          }
        },
        methods: {
          addToCart() {
            let item = this.selectedItem;
            item = {
                ...item,
                quantity: 1,
                price:this.selectedSize[this.selectedIndex].price,
                sizeName:this.selectedSize[this.selectedIndex].name,
                size: this.size
            };
            console.log("item=", item)
            this.$store.commit("addToCart", {...item});
            this.isOrderModal = false
          },
          showCheeseTypeList () {
            this.isCheeseTypes = !this.isCheeseTypes
          },
          showVeggieToppingsList () {
            this.isVeggieToppings = !this.isVeggieToppings
          },
          openOrderModal(selectedItem,index) {
            this.selectedItem = selectedItem
            this.selectedIndex = index
            this.isOrderModal = true
          },
          closeOrderModal () {
            this.isOrderModal = false
          },
          veggieRegular (index) {
            this.$set(this.veggieRegularSelected, index, true)
          },
          veggieExtra (index) {
            this.$set(this.veggieRegularSelected, index, false)
          },
          cheeseRegular (index) {
            this.$set(this.cheeseRegularSelected, index, true)
          },
          cheeseExtra (index) {
            this.$set(this.cheeseRegularSelected, index, false)
          },

          closeCheckoutModal() {
            this.isCheckoutModal = false
          },
          goToCheckoutPage() {
            this.isCheckoutModal = false
            window.location.href = "/checkout"
          }
        }

    }
</script>
