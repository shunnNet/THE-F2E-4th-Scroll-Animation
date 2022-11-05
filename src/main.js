import { createApp } from 'vue'
import App from './App.vue'

import VButton from '@/components/common/VButton.vue'

const app = createApp(App)
app.component('VButton', VButton)
app.mount('#app')
