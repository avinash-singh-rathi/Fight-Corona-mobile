<template>
  <q-page class="text-center">
    <div class="text-h7 text-left text-primary q-my-lg q-mx-md">
      <q-btn @click="$router.go(-1);" flat color="primary" icon="arrow_back_ios" label="Back" />
    </div>
    <div class="text-h5 text-primary q-my-lg q-mx-md">
      {{supplier.name}}
    </div>
    <q-separator class="q-mb-sm" />

    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="col">
          <img v-if="supplier.image" :src="supplier.image_url">

          <q-card-section>
            <div class="text-h6">{{supplier.name}}</div>
            <div class="text-subtitle2">{{supplier.address}}</div>
          </q-card-section>

          <q-card-section>
            <div class="text-h6">Package Info</div>
            <div class="text-subtitle2">{{supplier.packageinfo}}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h6">
              Delivery Area:
            </div>
            <div class="text-subtitle2">
              {{supplier.deliveryarea}}
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-h6">
              Contact:
            </div>
            <div class="text-subtitle2">
              {{supplier.contact}}
            </div>
          </q-card-section>
          <q-card-actions align="around">
            <q-btn icon="call" @click="callPhone()" color="green" flat>Call</q-btn>
          </q-card-actions>
      </q-card>
    </div>

  </q-page>
</template>

<script>
export default {
  props:['id'],
  data () {
    return {
      supplier:{},
    }
  },
  computed:{
    suppliers(){
      return this.$store.state.supplier.suppliers;
    },
  },
  methods:{
    getsupplier(){
        var supplierid=this.$route.params.id;
        this.supplier=this.$_.find(this.suppliers, function(o) { return o.id == supplierid; });
    },
    callPhone(){
      var contact=this.supplier.mobile;
      if(contact){
          window.open('tel:'+contact);
      }
      return false;
    }
  },
  mounted(){
    this.getsupplier();
  },
}
</script>
