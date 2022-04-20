<template>
  <div>
    <v-card class="px-10 pt-8 rounded-lg" flat>
      <v-card-text>
        <v-row justify="center">
          <v-col cols="4">
            <v-text-field
              class="rounded-lg"
              placeholder="Job title, keywords, or company"
              append-icon="mdi-chevron-double-down"
              hide-details
              clearable
              outlined
              dense
            ></v-text-field
          ></v-col>
          <v-col cols="4">
            <v-text-field
              append-icon="mdi-map-marker"
              class="rounded-lg"
              placeholder="City, state, zip code, or “remote”"
              hide-details
              clearable
              outlined
              dense
            ></v-text-field
          ></v-col>
          <v-col cols="auto"
            ><v-btn dark elevation="0" color="#2457A7" class="rounded-lg"
              >Find jobs</v-btn
            ></v-col
          >
          <v-col cols="auto">
            <p class="text-center py-5 black--text" style="font-size: 16px">
              <strong class="font-weight-bold">Post your resume</strong> – It
              only takes a few seconds
            </p>
            <p class="text-center black--text" style="font-size: 16px">
              Employers: Post a job
            </p>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
          <v-tabs height="70" centered color="black">
            <v-tab @click="$router.push('/job-feeds')">Job feeds</v-tab>
            <v-tab @click="$router.push('/recent-searches')">Recent searches</v-tab>
          </v-tabs>
    </v-card>
    <!-- <v-card class="rounded-lg pa-1 mt-2" flat>
      <v-card-text>
         <v-tabs centered color="black">
            <v-tab>Job feeds</v-tab>
            <v-tab>Recent searches</v-tab>
          </v-tabs>
      </v-card-text>
    </v-card> -->
    <v-row justify="center">
      <v-col cols="12" md="12" sm="12" class="my-6">
        <router-view />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import Header from '../../components/Header'
export default {
  components: {
    // Header
  },
  methods: {
    alertMessage () {
      alert('asd')
    }
  }
}
</script>

<style>
</style>
