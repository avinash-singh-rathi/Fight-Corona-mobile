<template>
  <q-page class="text-center">
    <div class="text-h7 text-left text-primary q-my-lg q-mx-md">
      <q-btn @click="$router.go(-1);" flat color="primary" icon="arrow_back_ios" label="Back to Dashboard" />
    </div>
    <div class="text-h5 text-primary q-my-lg q-mx-md">
      Symptoms
    </div>
    <q-separator class="q-mb-sm" />

    <div v-for="symptom in symptoms" class="q-pa-md row items-start q-gutter-md">
        <q-card flat bordered class="col">
          <q-item>
            <q-item-section>
              <q-item-label class="text-h7">{{symptom.name}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <img v-if="symptom.image" :src="symptom.image_url"/>
          <q-separator inset />
          <q-item-section class="q-my-lg">
            <q-item-label>
              {{symptom.content}}
            </q-item-label>
          </q-item-section>
        </q-card>
    </div>
    <div v-if="symptoms.length < 1" class="">
      <div class="text-h7">
          No Symptom to show
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
    symptoms(){
      return this.$store.state.patient.symptoms;
    }
  },
  methods:{
    getSymptoms () {
      this.$store.dispatch("patient/doSymptoms");
    },
  },
  mounted(){
    if(this.symptoms.length < 1){
      this.getSymptoms();
    }
  }
}
</script>
