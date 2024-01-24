import { createApp } from 'vue';
import App from './App.vue';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VContainer } from 'vuetify/components/VGrid'
import { VTable } from 'vuetify/components/VTable'
import { VSelect } from 'vuetify/components/VSelect'

const vuetify = createVuetify({
  components: {
	VContainer,
	VSelect,
	VTable,
  },
  directives: {},
  theme: {
    defaultTheme: 'dark'
  }
})

createApp(App).use(vuetify).mount('#app')