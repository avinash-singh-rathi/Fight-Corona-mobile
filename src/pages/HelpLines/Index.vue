<template>
  <q-page class="text-center">
    <div class="text-h7 text-left text-primary q-my-lg q-mx-md">
      <q-btn :to="{ path: '/'}" flat color="primary" icon="arrow_back_ios" label="Back" />
      <q-btn @click="getCountries()" flat color="primary" icon="refresh" label="Refresh" />
    </div>
    <div class="text-h5 text-primary q-my-lg q-mx-md">
      Search Helpline Numbers
    </div>
    <q-separator class="q-mb-sm" />
    <div v-show="formshow" class="">
      <form v-on:submit.prevent="search()">
        <div class="text-left q-px-lg" >
          <div v-for="error in errors" class="text-negative">
            {{error[0]}}
          </div>
            <q-select @input="getStates()" v-model="form.country" emit-value :rules="[ val => (val != undefined || val.length > 0) || 'Please select country' ]" input-debounce="0" :options="countries" option-value="id" option-label="name" map-options required label="Country"/>
            <q-select @input="getDistricts()" v-model="form.state" emit-value label="State" :options="states" option-value="id" option-label="name" map-options  />
            <q-select @input="getSubDistricts()" v-model="form.district" emit-value label="District" :options="districts" option-value="id" option-label="name" map-options />
            <q-select @input="getCities()" v-model="form.subdistrict" emit-value label="Sub District" :options="subdistricts" option-value="id" option-label="name" map-options />
            <q-select v-model="form.city" emit-value label="Cities" :options="cities" option-value="id" option-label="name" map-options />
        </div>
        <q-card-actions class="q-mt-sm">
          <q-btn type="submit" class="fit" color="primary">Find</q-btn>
          <q-btn class="q-mt-sm fit" @click="clearAll()" color="negative">Clear</q-btn>
        </q-card-actions>
      </form>
    </div>
    <q-btn @click="formshow = !formshow;" v-show="!formshow" outline rounded color="primary" label="Search" icon="expand_more" />

    <div v-if="results.length > 0" class="">
      <div v-for="result in results" class="q-pa-md row items-start q-gutter-md">
        <q-card class="col">

            <q-item>
              <q-item-section>
                <q-item-label class="text-h7">{{result.name}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-card-section>
              <div class="text-h6">{{result.contact}}</div>
            </q-card-section>
            <q-card-actions align="around">
              <q-btn icon="call" @click="callPhone(result.contact)" color="green" flat>Call</q-btn>
            </q-card-actions>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      form: {
        name: '',
        country:'',
        state:'',
        district:'',
        subdistrict:'',
        city:''
      },
      results:[],
      formshow:true,
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
    suppliers(){
      return this.$store.state.supplier.suppliers;
    },
    subdistricts(){
      return this.$store.state.supplier.subdistricts;
    }
  },
  methods: {
    search(){

        if(this.form.country == ""){
          this.$q.notify({
            position:'top',
            type: 'negative',
            message: 'Please select country atleast!'
          });
          return false;
        }
        this.$store.dispatch("general/doSearchHelpline",this.form).then(response => {
            this.formshow = !this.formshow;
            if(response.data.length < 1){
              this.$q.notify({
                position:'top',
                type: 'negative',
                message: 'Do not have any records to show'
              });
            }
            this.results = response.data;
        });

    },
    getStates(){
      this.form.state='';
      this.form.district='';
      this.form.subdistrict='';
      this.form.city='';
      this.$store.dispatch("supplier/doStates",this.form.country);
    },
    getDistricts(){
      this.form.district='';
      this.form.subdistrict='';
      this.form.city='';
      this.$store.dispatch("supplier/doDistricts",this.form.state);
    },
    getSubDistricts(){
      this.form.subdistrict='';
      this.form.city='';
      this.$store.dispatch("supplier/doSubDistricts",this.form.district);
    },
    getCities(){
      this.form.city='';
      this.$store.dispatch("supplier/doCities",this.form.subdistrict);
    },
    getCountries () {
  		this.$store.dispatch("supplier/doCountries");
  	},
    clearAll(){
      this.form.country='';
      this.form.state='';
      this.form.district='';
      this.form.subdistrict='';
      this.form.city='';
    },
    callPhone(contact){
      if(contact){
          window.open('tel:'+contact);
      }
      return false;
    }
  },
  mounted(){
    if(this.countries.length < 1){
      this.getCountries();
    }
  }
}
</script>
