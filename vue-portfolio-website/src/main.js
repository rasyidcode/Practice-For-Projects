import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faMoon } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(
    faUserSecret, 
    faEnvelope, 
    faMoon,
    faTwitter,
    faLinkedin,
    faYoutube
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
