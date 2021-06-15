<template>
<div class="container-fluid" >
  <Header/>
<div class="content">

</div>
  <Footer />
</div>

  
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  props: {
   
  },
  components: { 
    Header,
    Footer},
  data() {
    
  },
  methods: {
  }
}
</script>

<style scoped>
div{
  margin: 0;
  padding: 0;
}
.content{
  margin-top:80px;
}
</style>
