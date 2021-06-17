<template>


   <div class="container-fluid"> 
       
    <AdminHeader />


    <div class="container-fluid">
       
            <AdminSidebar />

             <AdminOrdersDataTable :adminOrders="adminOrders"  />
             
    </div>
   </div>
 
  
</template>

<script>

import AdminHeader from '../components/AdminHeader.vue'
import AdminSidebar from '../components/AdminSidebar.vue'
import AdminOrdersDataTable from '../components/AdminOrdersDataTable.vue'

export default {
  name: 'AdminOrder',
  props: {
   
  },
  components: { 
      AdminHeader,
      AdminSidebar,
      AdminOrdersDataTable
    
   },
 data() {
     return {
      adminOrders:[],
    }
  },
  methods:{
      async fetchOrders() {
      const res = await fetch('http://localhost:51044/delalo/orders')

      const data = await res.json()

      return data
    },
     
     

  },
    
    async created() {
    const res= await this.fetchOrders();
    if (res.results.length !==0){
        this.adminOrders=  res.results;
    }

    console.log(this.adminOrders);
    

   
    
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
