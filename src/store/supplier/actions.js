/*
export function someAction (context) {
}
*/
import Vue from 'vue'
import { Notify, Loading, LoadingBar } from 'quasar'

export const doCountries = ({ state,commit, dispatch }) => {

  return Vue.prototype.$axios
    .get('/countries')
    .then(response => {
      commit('SetCountries',response.data);
      return response;
    })
    .catch(e => {
      return e;
    })
}

export const doStates = ({ state,commit, dispatch },country) => {
  commit('ClearStates');
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .get('/countries/'+country+'/states')
    .then(response => {
      commit('SetStates',response.data);
      Loading.hide()
      LoadingBar.stop();
      return response;
    })
    .catch(e => {
      Loading.hide();
      LoadingBar.stop();
      return e;
    })
}

export const doDistricts = ({ state,commit, dispatch },state_id) => {
  commit('ClearDistricts');
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .get('/states/'+state_id+'/districts')
    .then(response => {
      commit('SetDistricts',response.data);
      Loading.hide()
      LoadingBar.stop();
      return response;
    })
    .catch(e => {
      Loading.hide()
      LoadingBar.stop();
      return e;
    })
}

export const doSubDistricts = ({ state,commit, dispatch },district_id) => {
  commit('ClearSubDistricts');
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .get('/districts/'+district_id+'/subdistricts')
    .then(response => {
      commit('SetSubDistricts',response.data);
      Loading.hide()
      LoadingBar.stop();
      return response;
    })
    .catch(e => {
      Loading.hide()
      LoadingBar.stop();
      return e;
    })
}

export const doCities = ({ state,commit, dispatch },subdistrict) => {
  commit('ClearCities');
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .get('/subdistricts/'+subdistrict+'/cities')
    .then(response => {
      commit('SetCities',response.data);
      Loading.hide()
      LoadingBar.stop();
      return response;
    })
    .catch(e => {
      Loading.hide()
      LoadingBar.stop();
      return e;
    })
}

export const doSearchSupplier = ({ state,commit, dispatch },city) => {
  commit('ClearSuppliers');
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .get('/cities/'+city+'/suppliers')
    .then(response => {
      commit('SetSuppliers',response.data);
      Loading.hide()
      LoadingBar.stop();
      return response;
    })
    .catch(e => {
      Loading.hide()
      LoadingBar.stop();
      return e;
    })
}
