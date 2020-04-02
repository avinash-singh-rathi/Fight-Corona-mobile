import { VueJwtAuth, AxiosHttpDriver, LocalStorageTokenStorageDriver } from '@mspiderv/vuejwtauth'
import { LocalStorage, SessionStorage } from 'quasar'

export default ({ Vue, store, router }) => new VueJwtAuth({
  Vue,
  router,
  store,
  options: { // optional
    drivers: {
      http: new AxiosHttpDriver({
        // Your API URL here
        apiBaseURL: process.env.API
      }),
      tokenStorage: new LocalStorageTokenStorageDriver(),
    },
    autoLogout:false
  }
})
