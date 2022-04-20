<template>
  <div>
    <v-row justify="center">
      <v-col cols="auto">
        <v-card v-for="item in 5" :key="item" class="mx-auto rounded-lg mb-3" max-width="480" flat outlined>
      <v-card-title>
        <v-row justify="space-between" align="center">
          <v-col cols="auto"><span>Staff Software Engineer</span></v-col>
          <v-col cols="auto"
            ><v-btn fab text small
              ><v-icon>mdi-dots-vertical</v-icon></v-btn
            ></v-col
          >
        </v-row>
      </v-card-title>
      <v-card-subtitle> N9 IT SOLUTIONS</v-card-subtitle>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            <v-chip class="rounded-lg body font-weight-bold"
              ><v-icon left>mdi-cash-multiple</v-icon> $132,000 ~ $230,000 a
              year</v-chip
            >
            <v-chip class="rounded-lg body font-weight-bold mx-1"
              ><v-icon left>mdi-briefcase-account</v-icon> Full-time</v-chip
            >
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        <ul class="b">
          <li>I cannot do C2C or offer sponsorship as of now.</li>
          <li>
            (Authorized to work anywhere in the USA and for only those who are
            staying in the USA).
          </li>
          <li>
            Apex needs a Jr-Mid full-stack Python Developer (PostgreSQL and…
          </li>
        </ul>
        <p class="body-2 text--disabled pa-2 pt-3">Today &#183; from Vuejs</p>
      </v-card-text>
    </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card max-width="500" width="500" color="transparent" flat tile>
        </v-card>
        <v-card max-width="500" width="500" flat color="white" height="100vh" :class=" ' rounded-lg'">
          <v-card-title>Python Developer</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cssProp: ''
    }
  },
  created () {
    window.addEventListener('scroll', e => {
      // console.log(e, window.scrollY, window.scrollX)
      if (window.scrollY < 378) {
        this.cssProp = ''
      } else {
        if (this.$vuetify.breakpoint.smAndup || this.$vuetify.breakpoint.mdAndDown) {
          this.cssProp = 'sticky-card-md'
        } else if (this.$vuetify.breakpoint.smAndDown) {
          this.cssProp = ''
        } else {
          this.cssProp = 'sticky-card'
        }
        console.log(this.$vuetify.breakpoint)
      }
    })
  }
}
</script>

<style scoped>
ul.b {
  list-style-type: circle;
}

.sticky-card {
  width: 500px;
  position: fixed;
  top: 0px;;
  right: 15.095%;
  z-index: 1;
  /* centering */
  /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%); */
}
.sticky-card-md {
  width: 500px;
  position: fixed;
  top: 0px;;
  right: 1.193%;
  z-index: 1;
  /* centering */
  /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%); */
}

.after-sticky {
  margin-top: 90px;
}
</style>
