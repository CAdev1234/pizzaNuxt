<template>
  <div>
    <div class="mx-auto h-full flex justify-center items-center">
      <div class="w-full mt-5 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20">
        <div class="container mx-auto">
          <div class="flex w-full mb-5 px-2 sm:hidden md:hidden lg:hidden xl:hidden">
            <div class="w-2/3">
              <div class="font-bold">LA RUOTA COQUITLAM</div>
              <div>1168 The High St Coquitlam, BC V3B OC6</div>
              <div class="font-bold">(604)474-1070</div>
            </div>
            <div class="w-1/3 pl-5 pt-9">
              <button class="w-full font-bold text-center text-white bg-gray-400">
                <a href="/locations">Change Store</a>
              </button>
            </div>
          </div>
          <div class="md:w-full lg:w-3/4 lg:float-left xl:float-left">
            <div class="w-full">
              <div class="mr-0 md:mr-5 lg:mr-5 xl:mr-5" style="margin-bottom:80px">
                <div class="w-full flex">
                  <span
                    class="pl-5 pr-2 py-3 w-full text-white text-center text-md sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-bold bg-black"
                    >WIN
                    <a href="#" class="color-green-custom">21 REWARD POINTS</a> WITH
                    THIS ORDER</span
                  >
                  <span
                    class="text-white text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl font-bold bg-green-custom flex items-center justify-center"
                    style="width: 150px;"
                    >SIGN UP</span
                  >
                </div>
                <div class="mt-3 p-5 bg-gray-100">
                  <div>
                    <div>When would you like it?</div>
                    <div class="inline-flex">
                      <div class="flex items-center">
                        <input type="radio" class="form-radio" checked name="checktime" v-model="nowCheckTime" @click="nowCheckTimeActive()"/>
                        <span class="ml-3 text-lg mr-10">Now</span>
                      </div>
                      <div class="flex items-center">
                        <input type="radio" class="form-radio" name="checktime" v-model="laterCheckTime" @click="laterCheckTimeActive()"/>
                        <span class="ml-3 text-lg">Later</span>
                      </div>
                    </div>
                    <div v-if="showLaterCheckItems">
                      <select class="mt-2 border rounded outline-none py-2 w-full">
                        <option value="Nov 3 - Tuesday" selected>Nov 3 - Tuesday</option>
                        <option value="Nov 4 - Wednesday">Nov 4 - Wednesday</option>
                        <option value="Nov 5 - Thursday">Nov 5 - Thursday</option>
                        <option value="Nov 6 - Friday">Nov 6 - Friday</option>
                        <option value="Nov 7 - Saturday">Nov 7 - Saturday</option>
                        <option value="Nov 8 - Sunday">Nov 8 - Sunday</option>
                      </select>
                      <select class="mt-2 border rounded outline-none py-2 w-6/12">
                        <option value="15:00" selected>15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                      </select>
                    </div>
                  </div>
                  <div class="mt-5">
                    <div>Service Method</div>
                    <div class="inline-flex">
                      <div class="flex items-center">
                        <input type="radio" class="form-radio" checked name="servicemethod" v-model="deliveryMethod" @click="deliverMethodActive()"/>
                        <span class="ml-3 text-lg mr-10">Delivery</span>
                      </div>
                      <div class="flex items-center">
                        <input
                          type="radio" class="form-radio" name="servicemethod" v-model="pickupMethod" @click="pickupMethodActive()"/>
                        <span class="ml-3 text-lg">Pickup</span>
                      </div>
                    </div>
                  </div>

                  <div class="mt-5">
                    <div>Full name</div>
                    <div class="flex mt-1">
                      <input type="text" class="mr-3 form-input w-full" placeholder="First name" />
                      <input type="text" class="form-input w-full" placeholder="Last name" />
                    </div>
                  </div>

                  <div class="md:flex lg:flex xl:flex mt-5 w-full">
                    <div class="w-full">
                      <div>E-mail address</div>
                      <input type="email" class="form-input w-full" placeholder="e.g. yourname@mail.com" />
                    </div>
                    <div class="mt-3 md:mt-0 lg:mt-0 xl:mt-0 md:ml-3 lg:ml-3 xl:ml-3 w-full">
                      <div>E-mail address(confirm)</div>
                      <input type="text" class="form-input w-full" placeholder="Last name" />
                    </div>
                  </div>

                  <div class="mt-5">
                    <div>phone number</div>
                    <div class="mt-1">
                      <input type="text" class="mr-9 form-input w-4/12" placeholder="6041234567" />
                    </div>
                  </div>

                  <div class="mt-5" v-if="showDeliveryAddressItems">
                    <div>Delivery address</div>
                    <div class="mt-1">
                      <input type="text" class="form-input w-full" placeholder="Street Number" />
                    </div>
                    <div class="mt-3 flex w-1/2">
                      <input type="text" class="form-input mr-3 w-5/12" placeholder="Postal Code..." />
                      <input type="text" class="form-input w-6/12" placeholder="City..." /> 
                    </div>
                    <div class="mt-3 flex">
                      <input type="text" class="form-input w-5/12" placeholder="Apartment/Unit" />
                    </div>
                    <div class="mt-3">
                      <input type="text" class="form-input w-full" placeholder="Buzz Code, Building Name or Notes..." />
                    </div>
                  </div>

                  <div class="mt-7">
                    <button class="text-white bg-black py-3 px-5">
                      Add delivery address
                    </button>
                  </div>

                  <div class="mt-7">
                    <div>Payment Method</div>
                    <div class="mt-2 flex items-center">
                      <input type="radio" class="form-radio" v-model="payWithCC" name="paymentmethod" @click="payWithCCActive()"/>
                      <span class="ml-3 text-lg">Pay Now with Credit Card</span>
                    </div>
                    <div v-if="showPayWithCCItem">
                      <input type="text" class="form-input mt-2 w-full" placeholder="Card hodler name" />
                      <input type="text" class="form-input mt-2 w-full" placeholder="Card number" />
                    </div>
                    <div class="mt-2">Pay at the Store</div>
                    <div class="mt-2 inline-flex">
                      <div class="flex items-center">
                        <input type="radio" class="form-radio" checked name="paymentmethod" v-model="payWithDC" @click="payWithDCActive()"/>
                        <span class="ml-3 text-lg mr-10">Debit/Credit Card</span>
                      </div>
                      <div class="flex items-center">
                        <input type="radio" class="form-radio" name="paymentmethod"/>
                        <span class="ml-3 text-lg">Cash</span>
                      </div>
                    </div>
                  </div>

                  <div class="mt-5">
                    <div>Notes</div>
                    <div class="mt-3">
                      <textarea
                        class="w-full focus:outline-none p-3 text-gray-700 rounded-lg"
                        placeholder="special notes for your order"
                        style="height: 150px"
                      />
                    </div>
                    <div v-if="showPayWithCCItem">
                      <div class="text-center mt-2 mb-2">Tip</div>
                      <div class="flex justify-center items-center">
                        <button class="flex justify-center items-center py-2 px-3 mr-2" 
                                :class="{'bg-red-600': isNoTip, 'text-white': isNoTip, 'bg-white': !isNoTip}" @click="noTipActive()">No Tip</button>
                        <button class="flex justify-center items-center py-2 px-3 mr-2" 
                                :class="{'bg-red-600': isTenTip, 'text-white': isTenTip, 'bg-white': !isNoTip}" @click="tenTipActive()">%10</button>
                        <button class="flex justify-center items-center py-2 px-3 mr-2" 
                                :class="{'bg-red-600': isFifteenTip, 'text-white': isFifteenTip, 'bg-white': !isNoTip}" @click="fifteenTipActive()">%15</button>
                        <button class="flex justify-center items-center py-2 px-3" 
                                :class="{'bg-red-600': isTwentyTip, 'text-white': isTwentyTip, 'bg-white': !isNoTip}" @click="twentyTipActive()">%20</button>
                      </div>
                      <div class="mt-2 flex justify-center items-center">
                        <button class="flex justify-center items-center py-2 px-3" 
                                :class="{'bg-red-600': isOtherTip, 'text-white': isOtherTip,'bg-white': !isOtherTip}" @click="otherTipActive()">Other %</button>
                        <input v-if="showOtherTip" type="text" class="form-input ml-3 w-4/12" value="0" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-7">
                  <div class="ml-0 flex justify-center items-center">
                    <button class="py-2 px-3 rounded-md bg-black text-white font-bold w-7/12 md:w-auto lg:w-auto xl:w-auto" style="border:1px solid gray">ADD A COUPON CODE</button>
                    <input type="text" class="ml-2 form-input w-4/12" placeholder="********"/>
                  </div>
                </div>
                <div class="mt-5">
                  <div class="flex items-center justify-left px-5">
                    <input type="checkbox" />
                    <div class="ml-3 leading-5 text-left">I would like to receive e-mail offers from La Ruota Pizza</div>
                  </div>
                  <div class="mt-3 flex items-center justify-left px-5">
                    <input type="checkbox" />
                    <div class="ml-3 leading-5 text-left">I would like to receive sms offers or order status notifications from La Ruota Pizza</div>
                  </div>
                </div>
                <div class="mt-10 flex justify-center items-center">
                  <button class="py-2 px-2 w-7/12 text-center text-lg text-white font-bold bg-gray-500">PLACE MY ORDER</button>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden sm:block md:block lg:block xl:block md:w-full lg:w-1/4 lg:float-right xl:float-right">
            <div class="w-full">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Cart from "~/components/Cart.vue";
import { mapMutations } from "vuex";
import { mapState } from "vuex";

export default {
  components: {
    Cart,
  },
  head: {
    title: "Menu",
    meta: [
      {
        hid: "menu",
        name: "menu",
        content: "menu",
      },
    ],
  },
  data() {
    return {
      activeId: "d0102d462eb3e21373b8f1d9ac220491a9c213cef28000083477cf7a",
      selectedSize: [],
      selectedQuantity: [],
      nowCheckTime: null,
      laterCheckTime: false,
      showLaterCheckItems: false,
      deliveryMethod: null,
      pickupMethod: false,
      showDeliveryAddressItems: true,
      payWithCC: false,
      showPayWithCCItem: false,
      payWithDC: null,
      showOtherTip: false,
      isNoTip: false,
      isTenTip: false,
      isFifteenTip: false,
      isTwentyTip: false,
      isOtherTip: false
    };
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },

    //            ...mapState(["storedata"]),
    product() {
      return this.storedata.find((el) => el.id === this.id);
    },
  },
  methods: {
    addToCart(selectedItem, index) {
      let item = selectedItem;
      item = {
        ...item,
        quantity: 1,
        price: this.selectedSize[index].price,
        sizeName: this.selectedSize[index].name,
        size: this.size,
      };
      this.$store.commit("addToCart", { ...item });
    },
    nowCheckTimeActive() {
      this.showLaterCheckItems = false
    },
    laterCheckTimeActive() {
      this.showLaterCheckItems = true
    },
    deliverMethodActive() {
      this.showDeliveryAddressItems = true
    },
    pickupMethodActive() {
      this.showDeliveryAddressItems = false
    },
    payWithCCActive() {
      this.showPayWithCCItem = true
    },
    otherTipActive() {
      this.showOtherTip = true
    },
    payWithDCActive() {
      this.showPayWithCCItem = false
    },
    noTipActive() {
      this.isNoTip = true
      this.isTenTip = false
      this.isFifteenTip = false
      this.isTwentyTip = false
      this.isOtherTip = false
      this.showOtherTip = false
    },
    tenTipActive() {
      this.isNoTip = false
      this.isTenTip = true
      this.isFifteenTip = false
      this.isTwentyTip = false
      this.isOtherTip = false
      this.showOtherTip = false
    },
    fifteenTipActive() {
      this.isNoTip = false
      this.isTenTip = false
      this.isFifteenTip = true
      this.isTwentyTip = false
      this.isOtherTip = false
      this.showOtherTip = false
    },
    twentyTipActive() {
      this.isNoTip = false
      this.isTenTip = false
      this.isFifteenTip = false
      this.isTwentyTip = true
      this.isOtherTip = false
      this.showOtherTip = false
    },
    otherTipActive() {
      this.isNoTip = false
      this.isTenTip = false
      this.isFifteenTip = false
      this.isTwentyTip = false
      this.isOtherTip = true
      this.showOtherTip = true
    }
  },
};
</script>
