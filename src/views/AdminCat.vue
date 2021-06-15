<template>


   <div class="container-fluid"> 
       
    <AdminHeader />


    <div class="container-fluid">
       
            <AdminSidebar />

            <div class="col-sm-12 main" style="margin-top:10%;margin-left:2%;">
                <div class="row">
                    <div class="col-sm-12 main">
                        <div class="row row1">
                            <h3 class="page-header">Category List</h3>
                            <!-- <h2 class="sub-header">Section title</h2> -->
                            <div class="table-responsive">

                                <table id="example" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Image</th>
                                            <th>No. of Providers</th>
                                            <th>Update</th>
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- @foreach (var item in Model.categoryList)
                                        { -->
                                        <tr>

                                            <td>@Html.DisplayFor(modelItem => item.Name)</td>
                                            <td>@Html.DisplayFor(modelItem => item.Description)</td>
                                            <td>
                                                <!-- <img src="@Html.DisplayFor(modelItem => item.Image)" width="50px" height="50px" /> -->
                                            </td>
                                            <td>@Html.DisplayFor(modelItem => item.NumProviders)</td>
                                            <td> <a asp-page="./EditCategory" asp-route-id="@item.Id" style="text-decoration:none;"><i class="fas fa-edit" style="color: #ffc107;"></i></a> </td>
                                            <td><a asp-page="./DeleteCategory" asp-route-id="@item.Id" style="text-decoration:none;"><i class="fas fa-trash-alt" style="color:#dc3545;"></i></a></td>

                                        </tr>
                                                 
                                    </tbody>

                                </table>
                            </div>

                        </div>
                        <a href="./AddCategory" class="btn" style="margin-top:20px; width:170px; height:40px; font-size:18px;background-color:#301934; color:#ffffff;">Add New Category</a>

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
  name: 'AdminCat',
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
