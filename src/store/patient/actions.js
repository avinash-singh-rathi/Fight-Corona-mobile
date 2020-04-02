/*
export function someAction (context) {
}
*/
import Vue from 'vue'
import { Notify, Loading, LoadingBar } from 'quasar'

export const doSymptoms = ({ state,commit, dispatch }) => {
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .get('/symptoms')
    .then(response => {
      commit('SetSymptoms',response.data);
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

export const doReportPatient = ({ state,commit, dispatch },form) => {
  let symptoms=form.symptoms;
  form.symptoms = JSON.stringify(symptoms);
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .post('/patients/create',form)
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

export const doPatients = ({ state,commit, dispatch },data) => {
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .get('/patients',{params:data})
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

export const doLostPatients = ({ state,commit, dispatch },data) => {
  commit('ClearLostPatients');
  Loading.show();
  LoadingBar.start();
  return Vue.prototype.$axios
    .get('/lostpatients',{params:data})
    .then(response => {
      commit('SetLostPatients',response.data.data);
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
