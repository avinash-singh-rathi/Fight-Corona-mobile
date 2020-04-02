<template>
  <div class="bg-grey-1 text-white">
   <form v-on:submit.prevent="onSubmit()">
      <q-card class="flex-center text-center q-px-md q-py-lg" style="box-shadow:none;">
        <img src="~assets/Fight-Corona-250.png" style='padding-top:30px; padding-bottom:30px'>
        <q-separator />
        <div class="text-left" >
            <q-input id="username" type="email" v-model.trim="form.username" label="Email" stack-label required autofocus/>
            <q-input id="password" type="password" v-model="form.password" label="Password" stack-label required/><br>
        </div>
        <q-card-actions>
          <q-btn type="submit" class="fit" color="primary">Login</q-btn>
        </q-card-actions>
        <div class="text-primary">
          Do not have account yet? <router-link :to="'/register'" class='text-secondary'>Register Here</router-link>
        </div>
      </q-card>
    </form>
  </div>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      drawerState: true,
      rememberMe: true,
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$q.loadingBar.start();
      this.$q.loading.show();
      this.$auth.attemptLogin({
        email: this.form.username,
        password: this.form.password
      },this.rememberMe)
        .then(logged => {this.$q.loadingBar.stop();this.$q.loading.hide();console.log(logged)})
        .catch(fail => {
          this.$q.loadingBar.stop();this.$q.loading.hide();this.$q.notify({message:'Invalid Credentials',position: 'top',type: 'negative'});console.log('Failure');console.log(fail)
        });
    }
  }
}
</script>
