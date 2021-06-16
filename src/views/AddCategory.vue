<template>


   <div class="container" style="margin-top:7%;margin-left:5%;">
      
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="col-md-6">
                            <h2> <a href="./AdminDashboard"><i class="fa fa-arrow-left"></i></a></h2>
                            
                            <h3>Add New Category</h3>
                            <form  @submit="onSubmit">
                                <div class="form-group">
                                    <label >Name</label>
                                    <input type="text" v-model="name" name="name"   class="form-control" aria-describedby="emailHelp" placeholder="Enter category name" style="width:400px;">

                                </div>
                                <div class="form-group">
                                    <label asp-for="Category.Description">Description</label>
                                    <input type="text" v-model="description" name="description"  class="form-control" placeholder="Say something about it..." style="width:400px; height:100px;">
                                </div>

                                <div class="col-auto">
                                    <label asp-for="Category.Image">Add image</label>
                                    <div class="avatar-wrapper" data-tippy-placement="bottom" title="Change Avatar">
                                        <img class="profile-pic" src="images/user-avatar-placeholder.png" alt="" />
                                        <div class="upload-button"></div>
                                        <input  name="image"  class="file-upload" type="file" accept="image/*" />
                                    </div>
                                </div>

                                <button type="submit" class="btn " style="margin-top:20px; width:100px; height:40px; font-size:18px;background-color:#301934; color:#ffffff;">Add</button>
                            </form>

                        </div>
                        <div class="col-md-6">
                            <img src="../assets/addcat.png" style="width:70%; height:70%;">
                        </div>
                    </div>

            </div>
        </div>
            </div>
        </div>
 
  
</template>

<script>



export default {
  name: 'AddCategory',
  props: {
   
  },
  components: { 
    
   },
  data() {
      return{
           name: '',
      description: '',
      image: "null",
      }
    
  },
  methods: {
    async addCategory(category) {

        const res = await fetch('http://localhost:51044/delalo/categories', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json'
        },
        body:JSON.stringify(category)
      })
    console.log("getting here")
    console.log(res);
    console.log(await res.json())
    const data = "" //await res.json()
    console.log("D",data);
      
      res.status === 200
          ? window.location.href ='../AdminCat'
          : alert('Error creating category')
   

     
    

    },

    onSubmit(e) {
      e.preventDefault()

      if (!this.name) {
        alert('Please add a category name')
        return
      }
      
      if (!this.description) {
        alert('Please add a category description')
        return
      }

      const newCategory = {
        
        "name": this.name,
        "description": this.description,
        "image": this.image,
        "num_of_providers": 0
      }

     this.addCategory(newCategory);

      this.name = ''
      this.description = ''
      this.image = null

    },

   
    
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
