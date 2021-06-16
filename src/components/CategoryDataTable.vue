<template>
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
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody :key="category.id" v-for="category in categories">
                                        <!-- @foreach (var item in Model.categoryList)
                                        { -->
                                        <tr>

                                            <td>@Html.DisplayFor(modelItem => item.Name)</td>
                                            <td>@Html.DisplayFor(modelItem => item.Description)</td>
                                            <td>
                                                <!-- <img src="@Html.DisplayFor(modelItem => item.Image)" width="50px" height="50px" /> -->
                                            </td>
                                            <td>@Html.DisplayFor(modelItem => item.NumProviders)</td>
                                            <td> <a href="./DeleteCategory"  @delete-category="$emit('delete-category', category.id)"><i class="fas fa-trash-alt" style="color:#dc3545;"></i></a> </td>

                                        </tr>
                                                 
                                    </tbody>

                                </table>
                            </div>

                        </div>
                        <a href="./AddCategory" class="btn" style="margin-top:20px; width:170px; height:40px; font-size:18px;background-color:#301934; color:#ffffff;">Add New Category</a>

                    </div>
                </div>
            </div>
    
    
</template>

<script>
export default {
     name: 'CategoryDataTable',
  props: {
      categories:Array,
  },
 
 
  methods: {
    
  }
}

</script>
<style scoped>

</style>