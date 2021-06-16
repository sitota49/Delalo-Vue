<template>


   <div class="container-fluid"> 
       
    <AdminHeader />


    <div class="container-fluid">
       
            <AdminSidebar />

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
                                    <tbody>
                                        <!-- @foreach (var item in Model.ordersList)
                                        { -->
                                           
                                        <tr>
                                            <!-- @foreach (var uid in Model.userProviders)
                                            {
                                                var userId = uid.Id;
                                                if (item.ProviderId == userId && uid.Role == "provider")
                                                { -->
                                                    <td>
                                                        <span>@Html.DisplayFor(modelItem => uid.FirstName)</span>
                                                        <span>@Html.DisplayFor(modelItem => uid.LastName)</span>
                                                    </td>
                                                <!-- }
                                            }
                                            @foreach (var uid in Model.userProviders)
                                            {
                                                var userId = uid.Id;
                                                if (item.SeekerId == userId && uid.Role == "user")
                                                { -->
                                                    <td>
                                                        <span>@Html.DisplayFor(modelItem => uid.FirstName)</span>
                                                        <span>@Html.DisplayFor(modelItem => uid.LastName)</span>
                                                    </td>

                                                <!-- }
                                            }
                                            @foreach (var uid in Model.providerList)
                                            {
                                                var userId = uid.Id;
                                                if (item.ProviderId == userId)
                                                { -->
                                                    <td>
                                                        @Html.DisplayFor(modelItem => uid.Category)

                                                    </td>
                                                <!-- }
                                            }
                                            @if (item.OrderCompletedDate == null)
                                            { -->
                                                <td>-</td>
                                            <!-- }
                                            @if (item.OrderCompletedDate != null)
                                            { -->
                                                <td>@Html.DisplayFor(modelItem => item.OrderCreatedDate)</td>
                                            <!-- } -->



                                            <td>@Html.DisplayFor(modelItem => item.UniqueCode)</td>
                                            <!-- @if (item.OrderCompletedDate == null)
                                            { -->
                                                <td>-</td>
                                            <!-- }
                                            @if (item.OrderCompletedDate != null)
                                            { -->
                                                <td>@Html.DisplayFor(modelItem => item.OrderCompletedDate)</td>
                                            <!-- } -->

                                           
                                            <td>@Html.DisplayFor(modelItem => item.SavedTime)</td>


                                        </tr>
<!-- 
                                        } -->

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
   </div>
 
  
</template>

<script>

import AdminHeader from '../components/AdminHeader.vue'
import AdminSidebar from '../components/AdminSidebar.vue'

export default {
  name: 'AdminOrder',
  props: {
   
  },
  components: { 
      AdminHeader,
      AdminSidebar
    
   },
  data() {
    
  },
  methods: {
  }
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
