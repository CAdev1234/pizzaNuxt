import axios from "axios";


export const state = () => ({
  cartUIStatus: "idle",
  products: [],
  cart: [],
  taxRate:0.05,
  stores:[]
});



export const mutations = {
  addProducts(state, payload) {
    state.products = payload
  },
  addStores(state, payload) {
    state.stores = payload
  },
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload;
  },
  clearCart: state => {
    //this clears the cart
    (state.cart = []), (state.cartUIStatus = "idle");
  },
  addToCart: (state, payload) => {
    console.log('payload',payload)
    let itemfound = state.cart.find(el => el.phash === payload.phash);
    itemfound
      ? (itemfound.quantity += payload.quantity)
      : state.cart.push(payload)
  },
  addOneToCart: (state, payload) => {
    let itemfound = state.cart.find(el => el.id === payload.id)
    itemfound ? itemfound.quantity++ : state.cart.push(payload)
  },
  removeOneFromCart: (state, payload) => {
    let index = state.cart.findIndex(el => el.id === payload.id)
    state.cart[index].quantity
      ? state.cart[index].quantity--
      : state.cart.splice(index, 1)
  },
  removeAllFromCart: (state, payload) => {
    console.log('removed call',payload)
    state.cart = state.cart.filter(el => el.phash !== payload.phash)
  }
};



export const actions ={
  getProducts({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/menu")
        .then((response) => {
          commit('addProducts', response.data);
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  getStores({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/stores")
        .then((response) => {
          console.log('stores',response.data)
          commit('addStores', response.data);
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchEvents({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/apps/calendar/events")
        .then((response) => {
          commit('SET_EVENTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchEventLabels({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/apps/calendar/labels")
        .then((response) => {
          commit('SET_LABELS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  editEvent({ commit }, event) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/apps/calendar/event/${event.id}`, {event: event})
        .then((response) => {

          // Convert Date String to Date Object
          let event = response.data
          event.startDate = new Date(event.startDate)
          event.endDate = new Date(event.endDate)

          commit('UPDATE_EVENT', event)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeEvent({ commit }, eventId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/apps/calendar/event/${eventId}`)
        .then((response) => {
          commit('REMOVE_EVENT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  eventDragged({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
        .then((response) => {

          // Convert Date String to Date Object
          let event = response.data
          event.startDate = new Date(event.startDate)
          event.endDate = new Date(event.endDate)

          commit('UPDATE_EVENT', event)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}



export const getters = {
  products: state  => state.products,
  stores: state  => state.stores,
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity, 0);
  },
  cartSubTotal: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
  },
  taxes: state => {
    let cartTotal=0;
    if (!state.cart.length) cartTotal= 0;
    else cartTotal= state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);

    return cartTotal * state.taxRate;
  },

  cartItems: state => {
    if (!state.cart.length) return [];
    return state.cart.map(item => {
      return {
        id: item.id,
        quantity: item.quantity
      };
    });
  },
};

