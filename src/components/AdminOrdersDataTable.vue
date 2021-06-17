<template>
    
    <div class="col-sm-12 main" style="margin-top:10%;margin-left:2%;">
                <div class="row">
                    <div class="col-sm-12 main">
                        <div class="row row1">
                            <h3 class="page-header">Order List</h3>
                            <div class="table-responsive">

                                <table id="example" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>

                                            
                                            <th>Provider Name</th>
                                            <th>Seeker Name</th>
                                            <th>Category</th>
                                            <th>Created Date </th>
                                            <th>Unique Code</th>
                                            <th>Completed Date</th>

                                            <th>Saved Time</th>

                                        </tr>
                                    </thead>
                                    <tbody :key="adminOrder.order.id" v-for="adminOrder in adminOrders">
                                    =
                                        <tr>
                                           
                                                    <td>
                                                        <span>{{adminOrder.provider.user_info.firstname}}</span>
                                                        <span>{{adminOrder.provider.user_info.lastname}}</span>
                                                    </td>
                                         
                                                    <td>
                                                        <span>{{adminOrder.user.user_info.firstname}}</span>
                                                        <span>{{adminOrder.user.user_info.lastname}}</span>
                                                    </td>

                                                    <td>
                                                        {{adminOrder.provider.provider_info.category}}

                                                    </td>
                                               
                                            <div  v-if="adminOrder.order.order_created_date !== null ">
                                         
                                                <td>-</td>
                                            </div>

                                            <div v-else>
                                                <td>{{adminOrder.order.order_created_date}}</td>
                                            
                                            </div>



                                            <td>{{adminOrder.order.unique_code}}</td>
                                           <div  v-if="adminOrder.order.order_completed_date !== null ">
                                         
                                                <td>-</td>
                                            </div>

                                            <div v-else>
                                                <td>{{adminOrder.order.order_completed_date}}</td>
                                            
                                            </div>
                                           
                                            <td>{{adminOrder.order.saved_time}}</td>


                                        </tr>


                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
     name: 'AdminOrdersDataTable',
  props: {
      adminOrders:Array,
  },
 
 
  methods: {
    
  }
}

</script>
<style scoped>

</style>