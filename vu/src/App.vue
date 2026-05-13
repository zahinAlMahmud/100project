<template>
<Nav />
<Home/>
<About/>
<Footer/>
</template>
<script>
import Home from './Components/Home.vue';
import Nav from './Components/Nav.vue';
import About from './Components/About.vue';
import Footer from './Components/Footer.vue';
export default {
  name:'App',
  components:{
  Home,
  Nav,
  About,
  Footer

}

}

</script>
<style></style>