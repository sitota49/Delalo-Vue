<template>


    <div class="container" style="margin-top:7%;margin-left:5%;">

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="col-md-6">
                            <h2> <a href="./AdminDashboard"><i class="fa fa-arrow-left"></i></a></h2>
                            <h3>Are you sure you want to delete this category?</h3>

                            <form method="post">
                                <div class="form-group">
                                    <label asp-for="Category.Name">Name:  </label>
                                    <input asp-for="Category.Name" style="border:none;" readonly />

                                </div>

                                <div class="form-group">
                                    <label asp-for="Category.Description">Description:  </label>
                                    <input asp-for="Category.Description" style="border:none;" readonly />
                                </div>

                                <div class="form-group">
                                    <label asp-for="Category.NumProviders">Number of providers:  </label>
                                    <input asp-for="Category.NumProviders" style="border:none;" readonly />
                                </div>

                                <div class="form-group">
                                    <label asp-for="Category.Image">Image:  </label>
                                    <input asp-for="Category.Image" type="image" src="~/img/vs.PNG" style="border:none; width:80px; height:80px;" readonly />

                                </div>

                                <button type="submit" class="btn " style="margin-top:20px; width:100px; height:40px; font-size:18px;background-color:#301934; color:#ffffff;">Delete</button>


                            </form>

                          
                        </div>
                        <div class="col-md-6">
                            <img src="../assets/trash.jpg" style="width:70%; height:70%;">
                        </div>

                    </div>


                </div>


             </div>
            </div>
        </div>
 
  
</template>

<script>



export default {
  name: 'DeleteCategory',
  props: {
   
  },
  components: { 
    
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




</style>
