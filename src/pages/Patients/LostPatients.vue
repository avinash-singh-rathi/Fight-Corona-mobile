<template>
  <q-page class="text-center">
    <div class="text-h7 text-left text-primary q-my-lg q-mx-md">
      <q-btn @click="$router.go(-1);" flat color="primary" icon="arrow_back_ios" label="Back to Dashboard" />
    </div>
    <div class="text-h5 text-primary q-my-lg q-mx-md">
      Lost/ Runaway Patients
    </div>
    <q-separator class="q-mb-sm" />

    <div class="q-gutter-lg flex flex-center row">
      <q-input outlined bottom-slots v-model="search" type="search">
        <template v-slot:after>
          <q-btn @click="getPatients(1);" outline size="lg" color="primary" icon="search" />
        </template>
      </q-input>
    </div>

    <div v-for="patient in patients" class="q-pa-md row items-start q-gutter-md">
        <q-card flat bordered class="col">
          <q-item>
            <q-item-section>
              <q-item-label class="text-h7">{{patient.name}}</q-item-label>
              <q-item-label caption>
                {{patient.created_at | HumanTime}}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <img v-if="patient.image" :src="patient.image_url"/>
          <q-separator inset />
          <q-item-section class="q-mt-lg">
            <q-item-label>
              {{patient.message}}
            </q-item-label>
          </q-item-section>
          <q-separator inset />
          <q-card-actions align="around">
            <q-btn icon="visibility" :to="{path:'/lostpatients/create/'+patient.id}" color="primary" flat>Report Patient</q-btn>
          </q-card-actions>
        </q-card>
    </div>
    <div v-if="patients.length > 0" class="q-pa-lg flex flex-center">
      <q-pagination @input="getPatients" v-model="current_page" :max="last_page" :max-pages="6"></q-pagination>
    </div>

    <div v-if="patients.length < 1" class="">
      <div class="text-h7">
          No Lost Patients to show
      </div>
    </div>

  </q-page>
</template>

<script>
import moment from 'moment';
export default{
  data(){
    return {
      current_page:1,
      last_page:1,
      patients:{},
      patientsdata:{},
      search:''
    }
  },
  methods:{
    getPatients (page) {
      var data={search:this.search,page:page};
      this.$store.dispatch("patient/doLostPatients",data).then(response=>{
          this.patients=response.data.data;
          this.last_page=response.data.last_page
      });
  	},
  },
  filters:{
    HumanTime: function (value) {
      if (!value) return ''
      return moment(String(value)).format('MM/DD/YYYY hh:mm');
    },
    YesorNo: function (value) {
      if (!value) return 'No';
      return 'Yes';
    }
  },
  mounted(){
    this.getPatients(1);
  }
}
</script>
