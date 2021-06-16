<template>
    
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
</template>

<script>
export default {
     name: 'ProviderDataTable',
  props: {
   
  },
 
  data() {
     return {
      providers:{},
    }
  },
  methods: {
    // async fetchProviders() {
    //   const res = await fetch('http://localhost:51044/delalo/providers')

    //   const data = await res.json()

    //   return data
    // },
    // async fetchProvider(id) {
    //   const res = await fetch(`api/tasks/${id}`)

    //   const data = await res.json()

    //   return data
//     // },
//     async created() {
//         // this.providers = await this.fetchProviders()
//         console.log("this.providers");
//   },
  }
}

</script>
<style scoped>

</style>