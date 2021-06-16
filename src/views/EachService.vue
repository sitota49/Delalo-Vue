<template>
<div class="container-fluid" >
  <Header/>
<div class="content">
    <div class="container-fluid cont" id="cont">
    <div class="row row">
        <div class="col-md-12 col text-center">
            <div class="middle  mx-auto">
                <h2 class="px-2">Find help now for your @Model.Service.Name - needed tasks</h2>
                <p>Choose the right person for you and get your task done efficently!</p>
                <div class="container chooseBtn">
                    <a href="/Provider_List" asp-route-id="@Model.Service.Id" asp-route-pag="1" class="btn btn-outline-secondary help">Find help now</a>
                </div>
            </div>
        </div>

    </div>

</div>

<div class="container cont2">
    <h3 class="title" id="eachServiceTitle"></h3>


    <div class="row row2">
        <h1>How it works</h1>
        <div class="container-fluid rowabout">
            <div class="row text-center">
                <div class="col-lg-4 ">
                    <!-- <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> -->
                    <img class="how-it-works__step-img" alt="" data-src="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_1_2x.png" data-srcset="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_1_1.png 1x, https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_1_2x.png 2x, https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_1_3x.png 3x" src="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_1_2x.png" srcset="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_1_1.png 1x, https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_1_2x.png 2x, https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_1_3x.png 3x">
                    <h4>1. Pick Your Task</h4>
                    <p>Describe the task you want done,where you want it done and the convenient time for you.</p>
                    <!-- <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p> -->
                </div><!-- /.col-lg-4 -->
                <div class="col-lg-4 ">
                    <!-- <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> -->
                    <img class="how-it-works__step-img" alt="" data-src="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_2_2x.png" data-srcset="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_2_1.png 1x, https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_2_2x.png 2x, https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_2_3x.png 3x" src="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_2_2x.png" srcset="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_2_1.png 1x, https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_2_2x.png 2x, https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_2_3x.png 3x">
                    <h4>2. Choose Your Provider</h4>
                    <p>Browse through our list excellent provider and make your choice by skills,reviews and price.</p>
                    <!-- <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p> -->
                </div><!-- /.col-lg-4 -->
                <div class="col-lg-4 colfacts">
                    <!-- <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> -->
                    <img class="how-it-works__step-img" alt="" data-src="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_3_2x.png" data-srcset="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_3_1.png 1x, https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_3_2x.png 2x, https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_3_3x.png 3x" src="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_3_2x.png" srcset="https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_3_1.png 1x, https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_3_2x.png 2x, https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto/q_auto/v1573737162/marketing/step_3_3x.png 3x">
                    <h4>3. Get It Done</h4>
                    <p>Your provider will show up and get the job done. Pay securely and leave a review.</p>
                    <!-- <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p> -->
                </div>
            </div>

        </div>

    </div>
</div>

<div class="container-fluid d-flex px-5 mx-5 py-3row">
    <h3 class="align-self-center text-center col-md-12 mt-4">Check out some of the top providers in @Model.Service.Name services</h3>
</div>


<FeaturedTaskers :topProviders="topProviders"/>
<div class="container cont5">
    <div class="row row5 d-flex">
        <div class="col-md-6 align-self-end pr-5">
            <img style="width:40rem; height:30rem;" src="https://ideas.ted.com/wp-content/uploads/sites/3/2019/12/featured_ask_help_istock-1.jpg" alt="" class="pr-5 imgholder">

        </div>


        <div class="col-md-6 col5 align-self-start pl-5">
            <h2 class="pl-4">Ready to hire a Provider?</h2>
            <div class="container chooseBtn1 pl-4">
                <a href="/Provider_List" asp-route-id="@Model.Service.Id" class="btn btn-outline-secondary help">Find help now</a>
            </div>
        </div>

    </div>

</div>
</div>

  <Footer />
</div>

  
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import FeaturedTaskers from '../components/FeaturedTaskers.vue'

export default {
  name: 'EachService',
  props: {
   
  },
  components: { 
    Header,
    Footer, 
    FeaturedTaskers},
  data() {
    return {
      topProviders:[],
    }
  },
  methods: {
      async fetchTopProvidersWithCategory(catId) {
      const res = await fetch(`http://localhost:51044/delalo/providers/top/${catId}`)

      const data = await res.json()

      return data
    },
  },
   async created() {
    // const res= await this.fetchTopProvidersWithCategory();
    // if (res.results.length !==0){
    //     this.topProviders=res.results;
    // }
   
    
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Rubik:300,400,500,700,900");

@import url('../assets/css/eachService.css');
@import url('../assets/css/style.css');

.content {
    margin-top: 80px;
}




</style>
