<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Fight Corona
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>

        <q-item to="/" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
        </q-item>

        <q-item to="/report-patient" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="person_add" />
          </q-item-section>
            <q-item-section>
              <q-item-label>Report Patient</q-item-label>
            </q-item-section>
        </q-item>

        <q-item to="/patients" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
            <q-item-section>
              <q-item-label>View Patients</q-item-label>
            </q-item-section>
        </q-item>

        <q-item to="/lostpatients" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="image_search" />
          </q-item-section>
            <q-item-section>
              <q-item-label>Lost/ Runaway Patients</q-item-label>
            </q-item-section>
        </q-item>

        <q-item to="/suppliers" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="fastfood" />
          </q-item-section>
            <q-item-section>
              <q-item-label>Ration Delivery</q-item-label>
            </q-item-section>
        </q-item>

        <q-item to="/news" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
            <q-item-section>
              <q-item-label>Lost/ Runaway Patients</q-item-label>
            </q-item-section>
        </q-item>

        <q-item to="/symptoms" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="error" />
          </q-item-section>
            <q-item-section>
              <q-item-label>Corona Symptoms</q-item-label>
            </q-item-section>
        </q-item>

        <q-item to="/precautions" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="favorite" />
          </q-item-section>
            <q-item-section>
              <q-item-label>Precautions</q-item-label>
            </q-item-section>
        </q-item>

        <q-item to="/helplines" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="phone" />
          </q-item-section>
            <q-item-section>
              <q-item-label>Helplines</q-item-label>
            </q-item-section>
        </q-item>

        <q-item @click="logout()" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>
            <q-item-section>
              <q-item-label>Logout</q-item-label>
            </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  components: {
    //
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        }
      ]
    }
  },
  methods:{
    logout(){
      this.$q.loadingBar.start();
      this.$auth.logout().then(response => {
        this.$q.loadingBar.stop();
      });
    },
    getCountries () {
  		this.$store.dispatch("supplier/doCountries");
  	},
    getSymptoms () {
  		this.$store.dispatch("patient/doSymptoms");
  	}
  },
  mounted(){
    this.getCountries();
    this.getSymptoms();
  },
}
</script>
