<template>
    <div class="container mt-5" style="margin-top: 6rem!important;">
    <div class="row">
        <div class="col-2">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                <a class="nav-link active" id="v-pills-jobs-tab" data-toggle="pill" href="#v-pills-jobs" role="tab" aria-controls="v-pills-jobs" aria-selected="false">Jobs</a>
                <a class="nav-link" id="v-pills-history-tab" data-toggle="pill" href="#v-pills-history" role="tab" aria-controls="v-pills-history" aria-selected="true">History</a>
            </div>
        </div>
        <div class="col-10">
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-jobs" role="tabpanel" aria-labelledby="v-pills-jobs-tab">
                    <div class="container">

                           <div  v-if="jobsList.length !== 0 & acceptedOrder !== null ">
                            <table class="table">   
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Seeker Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Details</th>
                                    </tr>
                                </thead>
                                <tbody :key="job.id" v-for="job in jobsList">
                                    <div  v-if=" acceptedOrder === null ">
                                    <tr>
                                                <th scope="row">{{order.user.user_info.firstname}}{{order.user.user_info.lastname}}</th>
                                                <td>{{order.user.user_info.address}}</td>
                                                <td>
                                                    <form method="post">
                                                        <button @click="accept(order.order.id)"  class="btn btn-success">Accept</button>
                                                        <button @click="decline(order.order.id)"  class="btn btn-danger">Decline</button>
                                                        </form>
                                                </td>
                                                <td>Not available</td>
                                            </tr>

                                     </div>

                        <div v-else>
                                 <tr>
                                            <th scope="row">{{order.user.user_info.firstname}}{{order.user.user_info.lastname}}</th>
                                            <td>{{order.user.user_info.address}}</td>
                                            <td>Undertaking...</td>
                                            <td>
                                                <p>{{order.user.user_info.phone}}</p>
                                                <p>{{order.order.unique_code}}</p>
                                            </td>
                                        </tr>
                        </div>
                                  
                        <div  v-if=" ordersAwaiting > 1 ">
                                   <tr>
                                                <td colspan="3" class="text-center">
                                                    You have @ordersAwaiting other requests waiting. Finish the task at hand to accept another one
                                                </td>
                                            </tr>

                                     </div>

                        <div v-else-if=" ordersAwaiting > 0 ">
                               <tr>
                                                <td colspan="3" class="text-center">
                                                    You have @ordersAwaiting other request waiting. Finish the task at hand to accept another one
                                                </td>
                                            </tr>
                        </div>
                                       
                                </tbody>
                            </table>
                     </div>

                        <div v-else>
                    <h3 class="text-center">You Have No Job Requests Currently!</h3>
                        </div>

                     




                    </div>


                </div>

                <div class="tab-pane fade" id="v-pills-history" role="tabpanel" aria-labelledby="v-pills-history-tab">

                    <div class="container">

                      
                          <div  v-if="jobsHistory.length !== 0 ">
                             <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Provider Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Details</th>

                                    </tr>
                                </thead>
                                <tbody :key="job.id" v-for="job in jobsHistory">

                                  <tr>
                                            <th scope="row">{{job.user.user_info.firstname}}{{job.user.user_info.lastname}}</th>
                                            <td>{{job.user.user_info.address}}</td>
                                            <td>
                                                <p>From: {{job.order.order_created_date}} " - " {{job.order.order_completed_date}}</p>
                                                <p>Phone No: {{order.user.user_info.phone}} </p>
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
     name: 'JobsDataTable',
  props: {
      jobs:Array,
  },
 
 
  methods: {
    
  }
}
</script>
<style scoped>

</style>