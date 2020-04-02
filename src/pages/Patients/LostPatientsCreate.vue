<template>
  <q-page class="text-center">
    <div class="text-h5 text-primary q-my-lg q-mx-md">
      Report Patient
    </div>
    <q-separator class="q-mb-sm" />
    <form v-on:submit.prevent="onReportPatient()">
      <div class="text-left q-px-lg" >
        <div v-for="error in errors" class="text-negative">
          {{error[0]}}
        </div>
          <q-input id="name" type="text" v-model.trim="form.name" label="Patient Name" stack-label required autofocus/>
          <q-input id="age" type="number" v-model.trim="form.age" label="Patient Age" stack-label required autofocus/>
          <q-input v-model="form.address" label="Address" stack-label required type="textarea"/>
          <q-select @input="getStates()" v-model="form.country_id" emit-value :rules="[ val => (val != undefined || val.length > 0) || 'Please select country' ]" required input-debounce="0" :options="countries" option-value="id" option-label="name" map-options label="Country"/>
          <q-select @input="getDistricts()" v-model="form.state_id" emit-value label="State" :options="states" option-value="id" option-label="name" required map-options  />
          <q-select @input="getSubDistricts()" v-model="form.district_id" emit-value label="District" :options="districts" option-value="id" option-label="name" required map-options />
          <q-select @input="getCities()" v-model="form.subdistrict_id" emit-value label="Sub District" :options="subdistricts" option-value="id" option-label="name" required map-options />
          <q-select v-model="form.city_id" emit-value label="Cities" :options="cities" option-value="id" option-label="name" required map-options />
          <q-input id="pincode" type="text" v-model.trim="form.pincode" label="Pincode" stack-label required/>
          <div class="text-grey-8 text-h7 q-mt-sm">
            Symptoms
          </div>
          <div v-for="symptom in form.symptoms" class="q-gutter-sm" :key="symptom.id">
            <q-checkbox v-model="symptom.checked" :label="symptom.name" color="teal" />
          </div>
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
        name: '',
        state_id:'',
        country_id:'',
        district_id:'',
        subdistrict_id:'',
        city_id:'',
        age:'',
        address:'',
        symptoms:[],
        message:'',
        longitude:'',
        latitude:'',
        lostpatient_id:''
      },
      errors:{}
    }
  },
  computed:{
    countries(){
      return this.$store.state.supplier.countries;
    },
    states(){
      return this.$store.state.supplier.states;
    },
    districts(){
      return this.$store.state.supplier.districts;
    },
    cities(){
      return this.$store.state.supplier.cities;
    },
    symptoms(){
      return this.$store.state.patient.symptoms;
    },
    lostpatients(){
      return this.$store.state.patient.lostpatients;
    },
    subdistricts(){
      return this.$store.state.supplier.subdistricts;
    }
  },
  methods: {
    getStates(){
      this.form.state_id='';
      this.form.district_id='';
      this.form.subdistrict_id='';
      this.form.city_id='';
      this.$store.dispatch("supplier/doStates",this.form.country_id);
    },
    getDistricts(){
      this.form.district_id='';
      this.form.subdistrict_id='';
      this.form.city_id='';
      this.$store.dispatch("supplier/doDistricts",this.form.state_id);
    },
    getSubDistricts(){
      this.form.subdistrict_id='';
      this.form.city_id='';
      this.$store.dispatch("supplier/doSubDistricts",this.form.district_id);
    },
    getCities(){
      this.form.city_id='';
      this.$store.dispatch("supplier/doCities",this.form.subdistrict_id);
    },
    getCountries () {
      this.$store.dispatch("supplier/doCountries");
    },
    getSymptoms () {
      this.$store.dispatch("patient/doSymptoms").then(response =>{
        this.form.symptoms=[];
        for(var i=0;i < this.symptoms.length;i++){
            this.form.symptoms.push({"id":this.symptoms[i].id,"name":this.symptoms[i].name,"checked":false});
        }
      });
    },
    getgeolocations(){
          let form=this.form;
          var onSuccess = function(position) {
            form.longitude =position.coords.longitude;
            form.latitude =position.coords.latitude;
          };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            //alert('code: '    + error.code    + '\n' +
            //      'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },
    onReportPatient(){
      this.$store.dispatch("patient/doReportPatient",this.form).then(response =>{
        this.$q.notify({message:response.data.message,position: 'top',type: 'positive'});
        this.$router.push({ path: '/' })
      }).catch(error => {
        console.log(error.response);
      });
    },
    SetLostPatients(){
      var patientid=this.$route.params.id;
      var lostpatient=this.$_.find(this.lostpatients, function(o) { return o.id == patientid; });
      this.form.name=lostpatient.name;
      this.form.lostpatient_id=patientid;
    }
  },
  mounted(){
    this.getgeolocations();
    if(this.countries.length < 1){
      this.getCountries();
    }

    if(this.symptoms.length < 1){
      this.getSymptoms();
    }

    if(this.symptoms.length > 0){
      this.form.symptoms=[];
      for(var i=0;i < this.symptoms.length;i++){
          this.form.symptoms.push({"id":this.symptoms[i].id,"name":this.symptoms[i].name,"checked":false});
      }
    }
    this.SetLostPatients();
  }
}
</script>
