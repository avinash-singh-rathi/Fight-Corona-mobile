<template>
  <q-page class="text-center">
    <div class="text-h7 text-left text-primary q-my-lg q-mx-md">
      <q-btn @click="$router.go(-1);" flat color="primary" icon="arrow_back_ios" label="Back to Dashboard" />
    </div>
    <div class="text-h5 text-primary q-my-lg q-mx-md">
      Precautions
    </div>
    <q-separator class="q-mb-sm" />

    <div v-for="precaution in precautions" class="q-pa-md row items-start q-gutter-md">
        <q-card flat bordered class="col">
          <q-item>
            <q-item-section>
              <q-item-label class="text-h7">{{precaution.name}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <img v-if="precaution.image" :src="precaution.image_url"/>
          <q-separator inset />
          <q-item-section class="q-my-lg">
            <q-item-label>
              {{precaution.content}}
            </q-item-label>
          </q-item-section>
        </q-card>
    </div>
    <div v-if="precautions.length < 1" class="">
      <div class="text-h7">
          No Precaution to show
      </div>
    </div>
  </q-page>
</template>

<script>
export default{
  data(){
    return {}
  },
  computed:{
    precautions(){
      return this.$store.state.general.precautions;
    }
  },
  methods:{
    getPrecautions () {
      this.$store.dispatch("general/doPrecautions");
    },
  },
  mounted(){
    if(this.precautions.length < 1){
      this.getPrecautions();
    }
  }
}
</script>
