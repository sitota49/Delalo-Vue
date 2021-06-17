<template>
    <div></div>
</template>


<script>
export default {
  name: 'Profile',
  props: {
   
  },
  components: {
   
  },
  data() {

},
    
  
  methods: {
      logout: function () {
      this.$session.destroy()
      this.$router.push('/')
    }
    
  },
  }

</script>

