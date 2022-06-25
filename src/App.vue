<template>
  <v-app id="inspire">
      <Header />
      <v-btn @click="openTelegram">Login</v-btn>
    <v-main class="grey lighten-3">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import './global.scss'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  data: () => ({
    links: [{
      title: 'Пользователи',
      link: 'users'
    },
    {
      title: 'Обеды',
      link: 'lunchs'
    },
    {
      title: 'Меню',
      link: 'menus'
    },
    {
      title: 'Отчеты',
      link: 'reports'
    },
    {
      title: 'Настройки',
      link: 'settings'
    }
    ],
    loginModal: false,
    registerModal: false,
    isCartActive: false
  }),
  created () {
    this.$router.push('/job-feeds')
  },
  methods: {
    toggleLogin () {
      this.loginModal = !this.loginModal
    },
    toggleRegister () {
      this.registerModal = !this.registerModal
    },
    toggleCartModal () {
      this.isCartActive = !this.isCartActive
    },
    closeCart () {
      this.isCartActive = false
    },
    openTelegram () {
      window.open('https://oauth.telegram.org/auth?bot_id=5303773505&origin=https%3A%2F%2Fcore.telegram.org&embed=1&request_access=write', '', 'width=400, height=400')
    }
  }
}
</script>
<style scoped>
  .trueClass {
    background: red;
  }

  .startLunk {
    background: rgba(15, 158, 214, 0.37);
    color: rgb(10, 84, 223) !important;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
