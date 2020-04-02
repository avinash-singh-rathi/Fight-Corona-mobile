/*
export function someAction (context) {
}
*/
import Vue from 'vue'
import { Notify, Loading, LoadingBar } from 'quasar'

export const doNews = ({ state,commit, dispatch },data) => {
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .get('/news',{params:data})
    .then(response => {
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

export const doPrecautions = ({ state,commit, dispatch }) => {
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .get('/precautions')
    .then(response => {
      commit('SetPrecautions',response.data);
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

export const doSearchHelpline = ({ state,commit, dispatch },data) => {
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .get('/helplines',{params:data})
    .then(response => {
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

export const doCreateFeedback = ({ state,commit, dispatch },form) => {
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .post('/feedbacks/create',form)
    .then(response => {
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
