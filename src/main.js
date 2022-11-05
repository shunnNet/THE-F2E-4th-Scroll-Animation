import { createApp } from 'vue'
import App from './App.vue'

import VButton from '@/components/business/VButton.vue'
import TypingText from '@/components/common/TypingText.vue'
import VLink from '@/components/business/VLink.vue'

const app = createApp(App)
app.component('VButton', VButton)
app.component('TypingText', TypingText)
app.component('VLink', VLink)
app.mount('#app')
