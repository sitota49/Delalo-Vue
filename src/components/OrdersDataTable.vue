<template>
    <div class="container mt-5">
    <div class="row">
        <div class="col-2">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                <a class="nav-link active" id="v-pills-active-tab" data-toggle="pill" href="#v-pills-active" role="tab" aria-controls="pills-active" aria-selected="true">Active</a>
                <a class="nav-link" id="v-pills-pending-tab" data-toggle="pill" href="#v-pills-pending" role="tab" aria-controls="pills-pending" aria-selected="false">Pending</a>
                <a class="nav-link" id="v-pills-history-tab" data-toggle="pill" href="#v-pills-history" role="tab" aria-controls="pills-history" aria-selected="false">History</a>
            </div>
        </div>
        <div class="col-10">
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-active" role="tabpanel" aria-labelledby="pills-active-tab">
                    <div class="container">
                        <div  v-if="ordersAccepted.length !== 0 ">
                                 <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Provider Name</th>
                                        <th scope="col">Details</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody  :key="order.order.id" v-for="order in ordersAccepted">
                                  
                                   <tr>
                                            <th scope="row">{{order.provider.user_info.firstname}}{{order.provider.user_info.lastname}}</th>
                                            <td>
                                                <p>Service: {{order.provider.provider_info.category}}</p>
                                                <p>Phone number: {{order.provider.user_info.phone}}</p>
                                                <p>Price per hour: {{order.provider.provider_info.per_hour_wage}}</p>
                                                <p>Hours Worked: {{Math.trunc(parseFloat(order.order.saved_time)*100)/100}}</p>
                                                <p>Current Total:  {{Math.trunc((parseFloat(order.order.saved_time)*parseFloat(order.provider.provider_info.per_hour_wage))*100)/100}}</p>
                                            </td>
                                            <td>

                                                <div v-if="order.order.progress === 'paused'">
                                                    <form method="post">
                                                          <button @click="startTime(order.order.id)" class="btn btn-primary">Start Time</button>
                                                          <button @click="completeTime(order.order.id)" class="btn btn-success">Complete</button>
                                                      </form>
                                                    </div>
                                                    <div v-else-if="order.order.progress === 'started'">
                                                      <form method="post">
                                                          <button @click="pauseTime(order.order.id)"  class="btn btn-danger">Pause Time</button>
                                                      
                                                    </form>
                                                    </div>
                                                    <div v-else-if="order.order.progress === 'failed'">
                                                   <form method="post">
                                                        <p>Unique code verification failed!</p>
                                                         <button @click="tryAgain(order.order.id)"   class="btn btn-danger">Try Again</button>
                                                       
                                                    </form>
                                                    </div>
                                                    <div v-else-if="order.order.progress === 'reviewing'">
                                                     <form  @submit="onSubmit" method="post">
                                                        <input  v-model="OrderId" name="OrderId"  min="0" type="number" class="form-control" id="exampleFormControlInput1" placeholder={{order.order.id}} required>
                                                        <div class="form-group">
                                                            <input  v-model="UniqueCode" name="UniqueCode"  min="0" type="number" class="form-control" id="exampleFormControlInput1" placeholder="Unique Code" required>
                                                        </div>
                                                        <div class="form-group">
                                                            <textarea type="text" v-model="Comment" name="Comment"  class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Review"></textarea>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="formControlRange">Rate</label>
                                                            <input   v-model="Rating" name="Rating"  type="range" class="custom-range" id="formControlRange" min="0" max="5" step="1" required>
                                                        </div>
                                                            
                                                        <button type="submit" class="btn btn-primary">Finish</button>
                                                    </form>
                                                    </div>                                             
                                         
                                            </td>
                                    </tr>
                                    
                                  
                                </tbody>
                            </table>
                        </div>

                        <div v-else>
                       <h3 class="text-center">You Have No Active Orders Currently!</h3>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="v-pills-pending" role="tabpanel" aria-labelledby="pills-pending-tab">

                    <div class="container">
                        <div  v-if="ordersPending.length !== 0 ">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Provider Name</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Status</th>

                                    </tr>
                                </thead>
                                <tbody  :key="order.id" v-for="order in ordersPending">
                               <tr>
                                            <th scope="row">{{order.provider.user_info.firstname}}{{order.provider.user_info.lastname}}</th>
                                            <td>{{order.provider.provider_info.category}}</td>
                                            <td>
                                                <!-- @if (item.Status == "pending")
                                                { -->
                                                    <form method="post">
                                                         <button @click="cancelOrder(order.order.id)"  class="btn btn-danger">Cancel Order</button>
                                                    </form>
                                                <!-- }
                                                else if (item.Status == "declined")
                                                { -->
                                                    <form method="post">
                                                        <button @click="someOneElse(order.order.id)"  class="btn btn-primary">Hire Someone Else</button>
                                                        <button asp-route-orderId="@item.Id" asp-route-categoryName="@item.Category" asp-page-handler="someOneElse" class="btn btn-primary">Hire Someone Else</button>
                                                    </form>
                                                <!-- } -->
                                            </td>
                                        </tr>
                                    <!-- } -->

                                </tbody>
                            </table>
                        </div>

                        <div v-else>
                       <h3 class="text-center">You Have No Pending Orders Currently!</h3>
                        </div>

                    </div>

                </div>
                <div class="tab-pane fade" id="v-pills-history" role="tabpanel" aria-labelledby="pills-history-tab">
                    <div class="container">

                        <div  v-if="ordersHistory.length !== 0 ">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Provider Name</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Details</th>

                                    </tr>
                                </thead>
                                <tbody  :key="order.id" v-for="order in ordersHistory">

                
                                        <tr>
                                            <th scope="row">{{order.provider.user_info.firstname}}{{order.provider.user_info.lastname}}</th>
                                            <td>{{order.provider.provider_info.category}}</td>
                                            <td>
                                                <p>From: {{order.order.order_created_date}} " - " {{order.order.order_completed_date}}</p>
                                                <p>Phone No: {{order.provider.user_info.phone}} </p>
                                                <p>Hours Worked: {{Math.trunc(order.order.saved_time*100)/100}}&nbsp;&nbsp; Total Price: {{Math.trunc((order.order.saved_time*parseDouble(order.order.per_hour_wage))*100)/100}}</p>
                                                
                                                <div  v-if="order.review !== null ">
                                                   
                                                    <p>Rating: {{order.review.rating}} <i class="fa-fas-star"></i></p>
                                                   
                                                    <div  v-if="order.review !== null ">
                                                     </div>
                                                    <div v-else>
                                                         <p>{{order.review.comment}}</p>
                                                    </div>
                                                
                                                </div>
                                                 <div v-else>
                                                    <h3 class="text-center">You Have No Pending Orders Currently!</h3>
                                                </div>
                                             
                                            </td>
                                        </tr>
                                  

                                </tbody>
                            </table>

                        </div>

                        <div v-else>
                      <h3 class="text-center">You Have No History!</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
     name: 'OrdersDataTable',
  props: {
      orders:Array,
      ordersAccepted: Array,
      ordersPending: Array,
      ordersHistory: Array,
  },
 
  
  data() {
      return{
           Comment: '',
      Rating: 0,
      UniqueCode: 0,
      OrderId : '',
      
      }
    
  },

//    computed:{
//        ordersAcceptedData : function(ordersAccepted){
//            return JSON.parse(JSON.stringify(ordersAccepted));
//        }
       
         
//   },
  methods: {
    async addReview(review) {

        const res = await fetch('http://localhost:51044/delalo/reviews', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json'
        },
        body:JSON.stringify(review)
      })
   
    const data = "" //await res.json()
    console.log("D",data);
      
      res.status === 200
          ? window.location.href ='../Orders'
          : alert('Error creating review')
   
    },

   

    startTime(orderId){
        console.log(orderId);
    },
    completeTime(orderId){console.log(orderId);
    },
    pauseTime(orderId){console.log(orderId);
    },
    cancelOrder(orderId){console.log(orderId);
    },
    someOneElse(orderId){console.log(orderId);
    },

    onSubmit(e) {
      e.preventDefault()

      if (!this.UniqueCode) {
        alert('Please insert the unique code given to you by your provider')
        return
      }
      

      const newReview = {       
        "rating": this.Rating,
        "comment": this.Comment,
        "order_id": this.OrderId,
      }

     this.addReview(newReview);

      this.name = ''
      this.description = ''
      this.image = null

    },
  
   
    
  },
     async created() {
          console.log(this.ordersAccepted)
  
        
    
  },
}
</script>
<style scoped>

</style>