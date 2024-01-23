//This file imports the App.vue file and the router and mounts everything that we add on 
//App.vue to the div with id=app in index.html

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
