<template>


    <div class="container" style="margin-top:7%;margin-left:5%;" >

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="col-md-6">
                            <h2> <a href="./AdminDashboard"><i class="fa fa-arrow-left"></i></a></h2>
                            <h3>Are you sure you want to delete this category?</h3>
                            <p>Category Name : {{category.name}}</p>
                             <p>Category Description : {{category.description}}</p>
                              <p>Number of Providers: {{category.num_of_providers}}</p>
                         

                       
                                

                                <button @click="deleteCategory(category.id)" class="btn " style="margin-top:20px; width:100px; height:40px; font-size:18px;background-color:#301934; color:#ffffff;">Delete</button>


                     
                          
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
     return {
       id: this.$route.params.id,
      category:null,
    }
  },
  methods:{
     
     async fetchCategory(id) {
      const res = await fetch(`http://localhost:51044/delalo/categories/${id}`)

      const data = await res.json()

      return data
    },
      async deleteCategory(id) {
     
        const res = await fetch(`http://localhost:51044/delalo/categories/${id}`, {
          method: 'DELETE',
        })

        res.status === 200
          ? window.location.href ='../AdminCat'
          : alert('Error deleting provider')
      
    },

  },
    
    async created() {
    const res= await this.fetchCategory(this.id);
   
    if (res.length !==0){
        this.category=res.category;
    }
    

 
    
  },
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
