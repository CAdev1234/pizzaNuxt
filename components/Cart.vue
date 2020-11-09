<template>
  <div id="cart">
    <div class="r">
      <div class="ra store">
        <h4>La Ruota Coquitlam</h4>
        <div class="a">
          <div>1168 The High St. Coquitlam, BC V3B 0C6</div>
          <a href="tel:(604) 474-1070" class="link">(604) 474-1070</a>
        </div>
        <div class="s">
          <div class="s0">
            <span>
              <i class="icon-cancel"></i> </span
            >{{ $t("cart.delivery") }}
          </div>
          <div class="s0">
            <span>
              <i class="icon-cancel"></i> </span
            >{{ $t("cart.pickup") }}
          </div>
        </div>
        <div class="btn my-0">
          <div><a href="/locations">{{ $t("cart.changeStore") }}</a></div>
        </div>
        <div class="ara20"></div>
      </div>
      <div class="ra cart">
        <div class="o-area">
          <div class="close"></div>
          <h3>{{ $t("cart.title") }}</h3>
          <div>
            <div class="ol">
              <div class="item" v-for="item in cart" :key="item.id">
                <div class="cursor-pointer">
                  <div class="del" v-on:click="removeAllFromCart(item)">✕</div>
                  <div class="d" @click="showItemInCartModal(item)">
                    <div class="name">
                      {{ item.quantity }} X {{ item.name }} | {{ item.sizeName }}
                    </div>
                    <div class="desc">
                      <div>{{ item.description }}</div>
                    </div>
                  </div>
                  <div class="p icit">{{ item.price }}</div>
                </div>
              </div>
              <div class="item">
                <div class="p">{{ $t("cart.subTotal") }}: ${{ subTotal }}</div>
              </div>
              <div>
                <div class="item">
                  <div class="p">{{ $t("cart.tax") }}: ${{ tax }}</div>
                </div>
              </div>
              <div class="total">{{ $t("cart.total") }}: ${{ subTotal }}</div>
            </div>
            <div>
              <div>
                <div class="ara20"></div>
                <div class="tac">
                  <div class="btn dib text-center">
                    <a class="flex items-center" @click="openCheckoutModal()">
                      <i class="fa fa-shopping-cart mr-1 text-xl text-white"></i>{{ $t("cart.checkout") }}
                    </a>
                  </div>
                  <div class="btn cancel dib">
                    <div>{{ $t("cart.addMore") }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Item Modal in Cart -->
    <div v-if="isItemInCartModal">
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
          <div class="absolute bg-white text-left overflow-hidden shadow-xl transform transition-all top-1/12 left-1/2 -translate-x-1/2 w-full sm:w-10/12 md:w-9/12 lg:8/12 xl:w-7/12 p-6">
            <div class="relative">
              <div class="bg-white sm:flex md:flex lg:flex xl:flex w-full">
                <div class="w-full sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-5/12">
                  <img class="w-full" :src="selectedItemInCart.picture" alt="">
                </div>
                <div class="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 ml-auto">
                  <h1 class="mt-5 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 font-bold text-xl">{{selectedItemInCart.name}}</h1>
                  <p>{{selectedItemInCart.detail}}</p>
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
                  <button class="bg-green-custom text-white font-bold p-3" @click="updateOrder()">UPDATE ORDER</button>
                </div>
                
              </div>
              <button class="absolute top-0 right-0 text-black" @click="closeItemInCartModal()">
                <i class="fa fa-close text-black text-3xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import eventBus from '~/plugins/eventBus.js'

export default {
  data() {
    return {
      isItemInCartModal: false,
      selectedItemInCart: {},
      sauceTypes: ["No Sauce", "Tomato Sauce", "Alfredo Sauce", "Pesto Sauce", "Olive Oil"],
      sauceAmounts: ["Normal", "Extra"],
      isCheeseTypes: false,
      cheeseTypes: ["Ricotta Cheese", "Fior di Latte*", "Grana Padano*", "Gorgonzola Cheese*", "Mozzarella Cheese*", "Vegan Cheese*"],
      cheeseRegularSelected: [],
      isVeggieToppings: false,
      veggieToppings: ["Roasted Red Peppers*", "Roasted Garlic", "Arugula*", "Kalamata Olives", "Red Onions", "Garlic", "Caramelized Onions", "Spinach", "Sun-Dried Tomatoes", "Pineapple", "Mushrooms", "Capers", "Artichoke", "Oyster Mushrooms, Baked Potatoes", "Thyme(no charge)", "Fresh Basil", "Grape Tomatoes", "Oregano(no charge)", "White Truffle Oil", "Pesto", "Crushed Dill"],
      veggieRegularSelected: [],
    }
  },
  computed: {
    ...mapState(["cart"]),
    // ...mapGetters(["cartCount", "cartTotal"])
    subTotal() {
      return this.$store.getters.cartSubTotal;
    },
    tax() {
      return this.$store.getters.taxes;
    },
  },
  methods: {
    addToCart(item) {
      this.$store.commit("addOneToCart", item);
    },
    removeAllFromCart(item) {
      this.$store.commit("removeAllFromCart", item);
    },
    openCheckoutModal() {
      eventBus.$emit('closeCartInAppNavInMobile')
      eventBus.$emit('openCheckoutModal')
    },
    showItemInCartModal(item) {
      console.log("selectedItemInCart", item)
      this.isItemInCartModal = true
      this.selectedItemInCart = item
    },
    closeItemInCartModal() {
      this.isItemInCartModal = false
    },
    showCheeseTypeList () {
      this.isCheeseTypes = !this.isCheeseTypes
    },
    showVeggieToppingsList () {
      this.isVeggieToppings = !this.isVeggieToppings
    },
    updateOrder() {
      this.isItemInCartModal = false
    }
  },
};
</script>
