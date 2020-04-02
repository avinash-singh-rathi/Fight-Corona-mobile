<template>
  <q-page class="text-center">
    <div class="text-h7 text-left text-primary q-my-lg q-mx-md">
      <q-btn @click="$router.go(-1);" flat color="primary" icon="arrow_back_ios" label="Back to Dashboard" />
    </div>
    <div class="text-h5 text-primary q-my-lg q-mx-md">
      Reported Patient List
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
          <q-item-section>
            <q-list>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label overline>Age:</q-item-label>
                    <q-item-label caption>{{patient.age}}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator inset />
                <q-item v-if="patient.symptoms" clickable v-ripple>
                  <q-item-section>
                    <q-item-label overline>Symptoms:</q-item-label>
                    <q-item-label v-for="symptom in JSON.parse(patient.symptoms)" :key="symptom.id" caption>{{symptom.name}}: {{symptom.checked | YesorNo}}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator inset />
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label overline>Message:</q-item-label>
                    <q-item-label caption>{{patient.message }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator inset />
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label overline>Is Solved:</q-item-label>
                    <q-item-label caption>{{patient.is_solved | YesorNo }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator inset />
                <q-item v-if="patient.remarks" clickable v-ripple>
                  <q-item-section>
                    <q-item-label overline>Remarks:</q-item-label>
                    <q-item-label caption>{{patient.remarks }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item v-if="patient.lostpatient_id" clickable v-ripple>
                  <q-item-section>
                    <q-item-label overline>Lost/ Runaway Patient:</q-item-label>
                    <q-item-label caption>{{patient.lostpatient_id | YesorNo }}</q-item-label>
                  </q-item-section>
                </q-item>

           </q-list>
          </q-item-section>
        </q-card>
    </div>
    <div v-if="patients.length > 0" class="q-pa-lg flex flex-center">
      <q-pagination @input="getPatients" v-model="current_page" :max="last_page" :max-pages="6"></q-pagination>
    </div>

    <div v-if="patients.length < 1" class="">
      <div class="text-h7">
          No Patient to show
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
      this.$store.dispatch("patient/doPatients",data).then(response=>{
          this.patients=response.data.data;
          this.last_page=response.data.last_page
      });
  	},
    parseSymptom(value){
      return JSON.parse(value);
    }
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
