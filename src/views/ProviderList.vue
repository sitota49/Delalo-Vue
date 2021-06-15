<template>
<div class="container-fluid" >
  <Header/>
<div class="container content">
   <SearchProvider />
</div>
  <Footer />
</div>

  
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import SearchProvider from '../components/SearchProvider.vue'

export default {
  name: 'Home',
  props: {
   
  },
  components: { 
    Header,
    Footer,
    SearchProvider
  },
  data() {
    
  },
  methods: {
  }
}
</script>

<style scoped>
@import url('../assets/css/blue.css');
@import url('../assets/css/style2.css');

</style>