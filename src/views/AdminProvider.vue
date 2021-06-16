<template>


   <div class="container-fluid"> 
       
    <AdminHeader />


    <div class="container-fluid">
       
            <AdminSidebar />
            <ProviderDataTable :providers="providers" @delete-provider="deleteProvider"/>
              
    </div>
   </div>
 
  
</template>

<script>

import AdminHeader from '../components/AdminHeader.vue'
import AdminSidebar from '../components/AdminSidebar.vue'
import ProviderDataTable from '../components/ProviderDataTable.vue'

export default {
  name: 'AdminProvider',
  props: {
   
  },
  components: { 
      AdminHeader,
      AdminSidebar,
      ProviderDataTable
    
   },
  data() {
     return {
      providers:[],
    }
  },
  methods:{
      async fetchProviders() {
      const res = await fetch('http://localhost:51044/delalo/providers')

      const data = await res.json()

      return data
    },
     async fetchProvider(id) {
      const res = await fetch(`http://localhost:51044/delalo/providers/${id}`)

      const data = await res.json()

      return data
    },
      async deleteProvider(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`http://localhost:51044/delalo/providers/${id}`, {
          method: 'DELETE',
        })

        res.status === 200
          ? (this.providers = this.providers.filter((provider) => provider.id !== id))
          : alert('Error deleting provider')
      }
    },

  },
    
    async created() {
    const res= await this.fetchProviders();
    this.providers=res.results;
   
    
  },
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Rubik:300,400,500,700,900");

@import url('../assets/css/style3.css');
@import url('../assets/css/adminCat.css');

.content {
    margin-top: 80px;
}

    .row1 {
            margin-left: 10px;
        }


</style>
