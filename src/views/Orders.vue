<template>

    <div>
        <Header />
<br>
<br>

<br>
<OrdersDataTable  :ordersAccepted="ordersAccepted" :ordersPending="ordersPending" :ordersHistory="ordersHistory"   />

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
      orders:[],
      ordersAccepted:[],
      ordersPending:[],
      ordersHistory:[],
       

    }
  },

  computed:{

  },
 methods:{
      async fetchOrders(userId) {
      const res = await fetch(`http://localhost:51044/delalo/userorders/${userId}`)

      const data = await res.json()

      return data
    },

    extractAcceptedOrders(orders){
      this.ordersAccepted= orders.filter((order) => order.order.status === "accepted");
    },
    extractPendingOrders(orders){
      this.ordersAccepted= orders.filter((order) => order.order.status === "pending");
    },
    extractHistoryOrders(orders){
      this.ordersAccepted= orders.filter((order) => order.order.is_completed === true);
    }
    

    

  },
    
    async created() {
    sessionStorage.setItem('UserID', 7)
    const resOrders= await this.fetchOrders(this.id);

        this.orders= resOrders.results;
        this.extractAcceptedOrders(resOrders.results);
        this.extractPendingOrders(resOrders.results);
        this.extractHistoryOrders(resOrders.results);
        
        console.log(this.orders);
        console.log(this.ordersAccepted);
    
  },
}

</script>
<style>
    @import '../assets/styles.css';
    @import '../assets/blue.css';
    @import '../assets/style2.css';
</style>