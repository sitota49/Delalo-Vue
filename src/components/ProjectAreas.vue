<template>
 <section>
     

      <div class="container my-3 d-flex align-items-center">
    <div class="container row mx-2 p-3" >
        
            <div class="card col-md-3  " style="width:30.5%; margin: 10px;" :key="category.id" v-for="category in categories">
                <a id="service-link" :href="`/EachService/${category.id}`">

                    <img id="hover-img" :src="category.image" class="card-img-top" alt="construction" style="height: 15rem;">
                    <div class="card-body ">
                        <h5 class="text-center">{{category.name}}</h5>
                        
                    </div>
                </a>
            </div>
       
    </div>
      </div>

 </section>
</template>
<script>
export default {
      name: 'ProjectAreas',
  props: {
      categories:Array,
  },
 
 
  methods: {
    
  }
}
</script>

<style scoped>
@import '../assets/css/style.css';
@import'~bootstrap/dist/css/bootstrap.css';
</style>