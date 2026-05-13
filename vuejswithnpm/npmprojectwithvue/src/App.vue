<script setup>
import Nav from './components/Nav.vue';
// import { RouterView} from 'vue-router';
const navList =[
      {name:'Home',link:'/'},
      {name:'About',link:'/about'},
      {name:'Contact',link:'/contact'},
      {name:'Blog',link:'/blog'},
] 
</script>

<template>
  <Nav :nav-list="navList"/>
  <router-view/>
</template>
