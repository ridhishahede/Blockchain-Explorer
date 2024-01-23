import { createRouter, createWebHistory } from 'vue-router'
import Form from '../views/Form.vue'
import Blockchain from '../views/Blockchain.vue'

const routes = [
  //This is the details of the file Form.vue. When the localhost loads with '/' at the end Form.vue is rendered
  {
    path: '/',
    name: 'form',
    component: Form
  },
    //This is the details of the file Blockchain.vue. When the localhost loads with '/explorer' at the end Blockchain.vue is rendered
  {
    path: '/explorer',
    name: 'Blockchain-Explorer',
    component: Blockchain,
    props: true
  }
]

//This is generated to ensure we have access to recent web history, to make sure we can move forward and backward 
//to the pages we have visited stored temporarily in recent web history.
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
