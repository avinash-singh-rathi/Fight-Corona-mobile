<template>
  <div class="bg-grey-1 text-white">
   <form v-on:submit.prevent="onSubmit()">
      <q-card square  class="q-px-md q-py-lg flex-center text-center">
        <img src="~assets/Fight-Corona-250.png" style='padding-top:30px; padding-bottom:30px'>
        <div class="text-h6 text-primary">
          Create Account
        </div>
        <q-separator class="q-mb-sm" />

        <div class="text-left q-px-sm" >
          <div v-for="error in errors" class="text-negative">
            {{error[0]}}
          </div>
            <q-input id="name" type="text" v-model.trim="form.name" label="Full Name" stack-label required autofocus/>
            <q-input id="email" type="text" v-model.trim="form.email" label="Email" stack-label required/>
            <q-input id="mobile" type="text" v-model.trim="form.mobile" label="Mobile" stack-label required/>
            <q-input id="password" type="password" v-model="form.password" label="Password" stack-label required/><br>
            <q-input id="password_confirmation" type="password" v-model.trim="form.password_confirmation" label="Confirm Password" stack-label required/>
        </div>
        <q-card-actions class="q-mt-sm">
          <q-btn type="submit" class="fit" color="primary">Register</q-btn>
        </q-card-actions>
        <div class="text-primary q-mt-lg">
          <router-link :to="'/login'" class='text-primary'>Back</router-link>
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
        email: '',
        password: '',
        password_confirmation:'',
        mobile:'',
        name:''
      },
      errors:{},
    }
  },
  methods: {
    onSubmit () {
      this.$q.loadingBar.start();
      this.$q.loading.show();
      this.$axios.post('/register',this.form)
      .then(response => {
          this.form.email='';
          this.form.password='';
          this.form.password_confirmation='';
          this.form.mobile='';
          this.form.name='';
          this.$q.loadingBar.stop();
          this.$q.loading.hide();
          this.$q.notify({message:'Registered Successfully! Please Login!',position: 'top',type: 'positive'});
      }).catch(error => {
        this.$q.loadingBar.stop();
        this.$q.loading.hide();
        if(error.response.data){
          this.errors=error.response.data.errors;
        }
      });
    }
  }
}
</script>
