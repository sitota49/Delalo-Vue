<template>
    
<div>
<Header />
<br>

<JobsDataTable :jobs="jobs"  />

<Footer />
</div>
</template>

<script>
import JobsDataTable from '../components/JobsDataTable.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Jobs',
  props: {
   
  },
  components: {
      Header,
      Footer,
   JobsDataTable,
  },
  data() {
    return {
      id: parseInt(sessionStorage.getItem('ProvID')),
      jobs:[],
    }
  },
 methods:{
      async fetchJobs(provId) {
      const res = await fetch(`http://localhost:51044/delalo/jobs/${provId}`)

      const data = await res.json()

      return data
    },
    
    

  },
    
    async created() {
    sessionStorage.setItem('ProvID', 3)
    const res= await this.fetchJobs(this.id);
   
    if (res.length !==0){
        this.jobs=res;
       
    }
   
    
  },
}

</script>



<style>

    /* @import '../assets/styles.css'; */
    /* @import '../assets/blue.css'; */
    @import '../assets/style2.css';
</style>