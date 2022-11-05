import { createApp } from 'vue'
import App from './App.vue'

import VButton from '@/components/business/VButton.vue'
import TypingText from '@/components/common/TypingText.vue'

const app = createApp(App)
app.component('VButton', VButton)
app.component('TypingText', TypingText)
app.mount('#app')
