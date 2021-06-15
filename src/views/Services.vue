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
                                <button type="submit" class="btn btnsearch" asp-page="/services">
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
<ProjectAreas />
</div>
  <Footer />
</div>

  
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProjectAreas from '../components/ProjectAreas.vue'

export default {
  name: 'Home',
  props: {
   
  },
  components: { 
    Header,
    Footer, 
    ProjectAreas},
  data() {
    
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
