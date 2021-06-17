<template>
<div class="container-fluid" >
  <Header/>
<div class="content">
<div class="container-fluid" id="con">
    <div class="row" id="row">
        <div class="col-md-12 col text-center">
            <div class="container conform">
                <div class="row text-center">
                    <div class="col-md-12 text-center">
                        <form>
                            <div class="input-group" >
                                <div class="form-outline">
                                    <input name="searchString" type="text" id="form1" class="form-control" placeholder="Search services here..." />

                                </div>
                                <button type="submit" class="btn btnsearch">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
              
        </div>
    </div>
</div>
<div class="container-fluid d-flex px-5 mx-5 py-3row">
    <h1 class="align-self-center text-center col-md-12 mt-4">Services We Have Got</h1>
</div>
 <ProjectAreas :categories="categories" />
</div>
 
</div>

   <Footer />
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProjectAreas from '../components/ProjectAreas.vue'

export default {
  name: 'Services',
  props: {
   
  },
  components: { 
    Header,
    Footer, 
    ProjectAreas},
  data() {
    return {
     
      categories:[]
    }
  },
  methods: {
   
     async fetchCategories() {
      const res = await fetch('http://localhost:51044/delalo/categories')

      const data = await res.json()

      return data
    },
    

  },
    
    async created() {
   
    const resCategories= await this.fetchCategories();
    if (resCategories.length !==0){
        this.categories=resCategories;
    }
   
   
    
  }
}


</script>

<style scoped>

</style>
