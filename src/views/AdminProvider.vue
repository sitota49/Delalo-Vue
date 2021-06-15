<template>


   <div class="container-fluid"> 
       
    <AdminHeader />


    <div class="container-fluid">
       
            <AdminSidebar />

                <div class="col-sm-12 main" style="margin-top:10%;margin-left:2%;">
                <div class="row">
                    <div class="col-sm-12 main">
                        <div class="row row1">
                            <h3 class="page-header">Provider List</h3>
                            
                            <div class="table-responsive">

                                <table id="example" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>Name</th>

                                            <th>Image</th>
                                            <th>Category</th>
                                            <th>Description</th>
                                            <th>No. of Jobs Done</th>

                                            <th>Recommendation</th>
                                            <th>PerHourWage</th>
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- @foreach (var item in Model.providerList)
                                        {
                                            @foreach (var uid in Model.userProviders)
                                            {
                                                var userId = uid.Id;
                                                if (item.UserId == userId && uid.Role=="provider")
                                                { -->
                                                    <tr>

                                                        <td>
                                                            <span>@Html.DisplayFor(modelItem => uid.FirstName)</span>
                                                            <span>@Html.DisplayFor(modelItem => uid.LastName)</span>
                                                        </td>
                                                        <td>
                                                            <!-- <img src="@Html.DisplayFor(modelItem => uid.Image)" width="50px" height="50px" /> -->
                                                        </td>
                                                        <td>@Html.DisplayFor(modelItem => item.Category)</td>
                                                        <td>@Html.DisplayFor(modelItem => item.Description)</td>


                                                        <td>@Html.DisplayFor(modelItem => item.JobsDone)</td>
                                                        <td><a href="@Html.DisplayFor(modelItem => item.Recommendation)" style="text-decoration: none;">Recommendation Link</a> </td>
                                                        <td>@Html.DisplayFor(modelItem => item.PerHourWage)</td>
                                                        <td> <a href="./DeleteProvider" asp-route-id="@item.UserId"><i class="fas fa-trash-alt" style="color:#dc3545;"></i></a> </td>



                                                    </tr>
                                                <!-- }
                                            }
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
  name: 'AdminProvider',
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
