<template>
  <v-app-bar color="white" height="60" flat elevation="0">
    <v-row justify="start" align="center">
      <v-col cols="4">
        <v-img height="30" width="200" src="../../assets/logo.jpg"></v-img>
      </v-col>
      <v-col cols="8">
        <v-tabs class="ml-n9" color="black darken-1">
          <v-tab v-for="link in links" :key="link">
            {{ link }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <div v-for="item in icons" :key="item" class="mx-3">
      <v-icon color="black">{{ item }}</v-icon>
    </div>
    <v-divider vertical style="width: 3px !important"></v-divider>
    <v-btn text elevation="0" color="black">Employees / Post jobs</v-btn>
  </v-app-bar>
</template>

<script>
// import logo from '../../assets/logo.jpg'
export default {
  data () {
    return {
      // logo,
      userExist: false,
      links: ['Find jobs', 'Company reviews', 'Find salaries'],
      icons: ['mdi-android-messages', 'mdi-bell', 'mdi-account']
    }
  },
  computed: {
    productQuantity () {
      return this.$store.state.products.length || null
    }
  },
  methods: {
    checkUser () {
      // console.log(this.$store.state.user)
      if (this.$store.state.user) {
        this.userExist = true
      } else this.userExist = false
    }
  },
  mounted () {
    this.checkUser()
  }
}
</script>

<style scoped lang="scss">
$text-field-outlined-fieldset-border-width: 0.2px;
.textFormat {
  text-transform: none !important;
}
.v-btn::before {
  background-color: transparent;
}
.logo {
  cursor: pointer;
}
</style>
