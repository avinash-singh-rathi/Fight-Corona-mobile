import Vue from 'vue'
import axios from 'axios'

//Vue.prototype.$axios = axios
//Vue.prototype.$axios.defaults.apiBaseURL='http://127.0.0.1:3000/api/';

// We create our own axios instance and set a custom base URL.
// Note that if we wouldn't set any config here we do not need
// a named export, as we could just `import axios from 'axios'`
const axiosInstance = axios.create({
  baseURL: process.env.API
})

axiosInstance.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('auth_token')
    //console.log(token);
    if (token) {
      config.headers['Authorization'] = `Bearer ${ token }`
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

// for use inside Vue files through this.$axios
Vue.prototype.$axios = axiosInstance

// Here we define a named export
// that we can later use inside .js files:
export { axiosInstance }
