// import something here

// "async" is optional
// export default async ({ /* app, router, Vue, ... */ }) => {
//   // something to do
// }
import moment from 'moment'
export default ({ Vue }) => {
  Vue.prototype.moment = moment // then use as this.$_
}
