// axios
import Vue from 'vue'
import axios from 'axios'

const domain = "https://ypzcxhubt3.execute-api.us-east-1.amazonaws.com";

const axiosHandler=axios.create({
  baseURL:domain,
  timeout: 100,
  headers: {'x-api-key': 'KTwuYDGnVU9T0fZE364rn55d9yLYgeSy3fp6tqr2'}
})

// axios
Vue.prototype.$http = axiosHandler

// mock
import "@/fake-db/index.js"
