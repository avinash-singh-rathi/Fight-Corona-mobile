<template>
  <q-page class="text-center">
    <div class="text-h5 text-primary q-my-lg q-mx-md">
      Share your feedback
    </div>
    <q-separator class="q-mb-sm" />
    <form v-on:submit.prevent="onCreateFeedback()">
      <div class="text-left q-px-lg" >
          <q-input id="name" type="text" v-model.trim="form.subject" label="Subject" stack-label required autofocus/>
          <q-input v-model="form.message" label="Message" stack-label required type="textarea"/>
      </div>
      <q-card-actions class="q-mt-sm">
        <q-btn type="submit" class="fit" color="primary">Report Patient</q-btn>
      </q-card-actions>
    </form>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      form: {
        subject: '',
        address:''
      },
      errors:{}
    }
  },
  methods: {
    onCreateFeedback(){
      this.$store.dispatch("general/doCreateFeedback",this.form).then(response =>{
        this.$q.notify({message:response.data.message,position: 'top',type: 'positive'});
        this.$router.push({ path: '/' })
      }).catch(error => {
        console.log(error.response);
      });
    }
  }
}
</script>
