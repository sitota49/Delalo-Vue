<template>
<div class="container-fluid" >
  <Header/>
  <div class="container-fluid content">
      <div class="back_img">

    <div class="container-fluid contback">
        <div class="row d-flex justify-content-center">
            <div class="col-md-9">
                <div class="card p-4 mt-3 contback2">
                    <h3 class="heading mt-5 text-center">How can we help you?</h3>

                    <div class="row mt-4 g-1 px-4 mb-5">
                        <div class="col-md-2">
                            <div class="card-inner p-3 d-flex flex-column align-items-center">
                                <img src="https://i.imgur.com/Mb8kaPV.png" width="50" fill="purple" style="color: purple !important;">
                                <div class="text-center mg-text"> <span class="mg-text">Account</span> </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card-inner p-3 d-flex flex-column align-items-center">
                                <img src="https://i.imgur.com/ueLEPGq.png" width="50" fill="purple" style="color: purple !important;">
                                <div class="text-center mg-text"> <span class="mg-text">Payments</span> </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card-inner p-3 d-flex flex-column align-items-center">
                                <img src="https://i.imgur.com/tmqv0Eq.png" width="50">
                                <div class="text-center mg-text"> <span class="mg-text">Delivery</span> </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card-inner p-3 d-flex flex-column align-items-center">
                                <img src="https://i.imgur.com/D0Sm15i.png" width="50">
                                <div class="text-center mg-text"> <span class="mg-text">Product</span> </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card-inner p-3 d-flex flex-column align-items-center">
                                <img src="https://i.imgur.com/Z7BJ8Po.png" width="50">
                                <div class="text-center mg-text"> <span class="mg-text">Anytime</span> </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card-inner p-3 d-flex flex-column align-items-center">
                                <img src="https://i.imgur.com/YLsQrn3.png" width="50">
                                <div class="text-center mg-text"> <span class="mg-text">Guarantee</span> </div>
                            </div>
                        </div>
                    </div>
                    <div class=" bg-gray-200">

                        <div class="container conform">
                            <div class="row text-center">
                                <div class="col-md-12 text-center">
                                    <form>
                                        <div class="input-group">
                                            <div class="form-outline">
                                                <input name="searchString" type="text" id="form1" class="form-control" placeholder="Search services here..." />

                                            </div>
                                            <button type="submit" class="btn btnsearch" asp-page="/Index">
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


        </div>
    </div>

      </div>
  <div class="container-fluid d-flex px-5 mx-5 py-3row">
         <h1 class="align-self-center text-center col-md-12 mt-4">Project Areas</h1>
      </div>
    <ProjectAreas />
    
    <FeaturedTaskers/>
   
      <section class="section pb-0 z_three">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h3 class="section-title">Ready to Get Started?</h3>
            </div>
            <div class="col-lg-4 col-sm-6 mb-lg- mb-4">
                <div class="hover-bg-primary text-center position-relative px-4 py-5 rounded-lg shadow">
                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559058694/feature-1.png" class="img-fluid" alt="feature-image">
                    <h5 class="pt-5 pb-3 text-capitalize card-title">Be a part</h5>
                    <p class="mb-4">Hear that? The sweet sigh of relief. Start getting more done.</p> <a class="btn btn-outline-secondary" href="/AuthOption" asp-route-providerId="0" data-abc="true">Sign Up</a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-lg- mb-4">
                <div class="hover-bg-primary text-center position-relative px-4 py-5 rounded-lg shadow">
                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559058716/feature-2.png" class="img-fluid" alt="feature-image">
                    <h5 class="pt-5 pb-3 text-capitalize card-title">How to use?</h5>
                    <p class="mb-4"> That might be little bit risky to have crew member like them.</p> <a class="btn btn-outline-secondary" href="/About" data-abc="true">Read more</a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-lg- mb-4">
                <div class="hover-bg-primary text-center position-relative px-4 py-5 rounded-lg shadow">
                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559058733/feature-3.png" class="img-fluid" alt="feature-image">
                    <h5 class="pt-5 pb-3 text-capitalize card-title">optimized data</h5>
                    <p class="mb-4">Grow your own business while saving the day for busy neighbors.</p> <a class="btn btn-outline-secondary" href="/BecomeaProvider" data-abc="true"> Become a Provider</a>
                </div>
            </div>
        </div>
    </div>
      </section>
  </div>
  <Footer />
</div>

  
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import FeaturedTaskers from '../components/FeaturedTaskers.vue'
import ProjectAreas from '../components/ProjectAreas.vue'

export default {
  name: 'Home',
  props: {
   
  },
  components: { 
    Header,
    Footer,
    FeaturedTaskers,
    ProjectAreas},
  data() {
    
  },
  methods: {
  }
}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Rubik:300,400,500,700,900");

@import url('../assets/css/style.css');

.content {
    margin-top: 80px;
}
</style>

