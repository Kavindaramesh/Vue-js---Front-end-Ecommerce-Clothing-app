<template>
  <div class="home">
    <Backgroundimage/>
    <Navbar/>    
    <Products/>
    <Events/>   
    <Reviews/>
    <Backgroundimage2/>
  </div>
</template>
<script>


// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Backgroundimage from '@/components/Backgroundimage.vue'
import Products from '@/components/Products.vue';
import Reviews from '@/components/Reviews.vue';
import Events from '@/components/Events.vue';
import Backgroundimage2 from '@/components/Backgroundimage2.vue';









export default {
  name: 'App',
  components: {
    Navbar,
    Backgroundimage,//Header
    Products,
    Reviews,
    Events,  
    Backgroundimage2,//Footer
   

  },
 
};


</script>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  width:100%;

  margin:0 auto;
  background-color: transparent;
}

body {
  margin:0;
  padding:0;
}
</style>



