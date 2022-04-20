import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en.json'
import ru from './ru.json'
import uz from './uz.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'ru-RU',
  messages: {
    'en-US': en,
    'ru-RU': ru,
    'uz-UZ': uz
  }
})

export default i18n
