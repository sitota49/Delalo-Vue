<template>

    <div>
        <Header />
<br>
<br>

<br>
<OrdersDataTable :ordersAccepted="ordersAccepted" :ordersPending="ordersPending" :ordersHistory="ordersHistory"   />

<Footer />
    </div>
</template>

<script>
import OrdersDataTable from '../components/OrdersDataTable.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Orders',
  props: {
   
  },
  components: {
       Header,
      Footer,
    OrdersDataTable,
   
  },
  data() {
    return {
      id: parseInt(sessionStorage.getItem('UserID')),
      orders:null,
      ordersAccepted:[],
      ordersPending:[],
      ordersHistory:[],  

    }
  },

 
 methods:{
      async fetchOrders(userId) {
      const res = await fetch(`http://localhost:51044/delalo/userorders/${userId}`)

      const data = await res.json()

      return data
    },
     async fetchAcceptedOrders(userId) {
      const res = await fetch(`http://localhost:51044/delalo/userorders/${userId}?status=accepted`)

      const data = await res.json()

      return data
    },

      async fetchPendingOrders(userId) {
      const res = await fetch(`http://localhost:51044/delalo/userorders/${userId}?status=pending`)

      const data = await res.json()

      return data
    },

     async fetchCompleteOrders(userId) {
      const res = await fetch(`http://localhost:51044/delalo/userorders/${userId}?complete=true`)

      const data = await res.json()

      return data
    },




  
    // extractPendingOrders(orders){
    //   this.ordersAccepted= orders.filter((order) => order.order.status === "pending");
    // },
    // extractHistoryOrders(orders){
    //   this.ordersAccepted= orders.filter((order) => order.order.is_completed === true);
    // }
    

    

  },
    
    async created() {
    sessionStorage.setItem('UserID', 7)
    const resOrders= await this.fetchOrders(this.id);

        this.orders= resOrders.results;
        // this.extractAcceptedOrders(resOrders.results);
        // this.extractPendingOrders(resOrders.results);
        // this.extractHistoryOrders(resOrders.results);

         const resAcceptedOrders= await this.fetchAcceptedOrders(this.id);
        console.log(resAcceptedOrders);

        this.ordersAccepted= resAcceptedOrders.results;

           const resPendingOrders= await this.fetchPendingOrders(this.id);

        this.ordersPending= resPendingOrders.results;

        
           const resCompletedOrders= await this.fetchCompleteOrders(this.id);

        this.ordersHistory= resCompletedOrders.results;
    

  
        // const target_copy = JSON.parse(JSON.stringify( this.orders));
        
    
  },
}

</script>
<style>
    @import '../assets/styles.css';
    @import '../assets/blue.css';
    @import '../assets/style2.css';
</style>