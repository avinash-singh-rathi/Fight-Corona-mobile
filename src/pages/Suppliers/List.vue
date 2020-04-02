<template>
  <q-page class="text-center">
    <div class="text-h7 text-left text-primary q-my-lg q-mx-md">
      <q-btn @click="$router.go(-1);" flat color="primary" icon="arrow_back_ios" label="Back to Search" />
    </div>
    <div class="text-h5 text-primary q-my-lg q-mx-md">
      Ration at your Home Results
    </div>
    <q-separator class="q-mb-sm" />

    <div v-for="supplier in suppliers" class="q-pa-md row items-start q-gutter-md">
      <q-card class="col">
          <img v-if="supplier.image" :src="supplier.image_url"/>

          <q-card-section>
            <div class="text-h6">{{supplier.name}}</div>
            <div class="text-subtitle2">{{supplier.address}}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="">
              Delivery Area:
            </div>
            <div class="">
              {{supplier.deliveryarea}}
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions align="around">
            <q-btn icon="visibility" :to="{path:'/suppliers/single/'+supplier.id}" color="primary" flat>View</q-btn>
            <q-btn icon="call" @click="callPhone(supplier.mobile)" color="green" flat>Call</q-btn>
          </q-card-actions>
      </q-card>
    </div>

  </q-page>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed:{
    suppliers(){
      return this.$store.state.supplier.suppliers;
    },
  },
  methods:{
    callPhone(contact){
      if(contact){
          window.open('tel:'+contact);
      }
      return false;
    }
  }
}
</script>
