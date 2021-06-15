<template>
<div class="container-fluid" >
  <Header/>
  <div class="container content">
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

      <div class="container my-3 d-flex align-items-center">
    <div class="container row mx-2">
        <!-- @foreach (var item in Model.categoryList)
        { -->

            <div class="card col-md-4 p-3 cardsss" >
                <a id="service-link" asp-page="/EachService" asp-route-id="@item.Id">
                    <!-- <img id="hover-img" src="@item.Image" class="card-img-top" alt="..." style="height: 15rem"> -->
                    <div class="card-body ">
                        <h5 class="text-center">@item.Name</h5>
                        
                    </div>
</a>
            </div>
        <!-- } -->
    </div>
      </div>

      <section class="taskers">
    <div class='container mx-auto mt-5 col-md-10 mt-100 cardrow' >
        <div class="header">
            <div class="title" style="color:black; font-weight:bold;">Featured Providers</div>
        </div>

        <div class="row " style="justify-content: center; margin-top:50px;" id="featuredTaskers">
            <!-- @foreach (var provider in Model.TopProviders)
            { -->
                <div class="card cardrow2" style="width: 18rem; height: 15rem; margin-top: 10px; margin-bottom: 30px; ">
                <a asp-page="/Single_Provider" asp-route-id="@provider.Id" asp-route-pag="1" style="text-decoration:none; color:black;">
                    <div class="card-content">
                        <div class="card-body p-0">
                            <!-- <div class="profile"> <img src="@provider.Image" alt="@provider.FirstName @provider.LastName "> </div> -->
                            <div class="card-title" style="font-size:20px;"> @provider.FirstName @provider.LastName<br /> <small>$@provider.PerHourWage per hour</small> <br> <small>@provider.JobsDone jobs done</small></div>
                            <div class="card-subtitle">
                                <!-- <p> <small class="text-muted" >@String.Format("{0:0.0}", provider.AverageRating) @for (var i = 0; i < (int)provider.AverageRating; i++) {<i class="fas fa-star warning" style="color: #FDCC0D "></i> }</small> </p> -->
                            </div>
                            <p class="text text-muted">Service: @provider.Category</p>
                        </div>
                    </div>
                </a>
                </div>
            <!-- } -->
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

export default {
  name: 'Home',
  props: {
   
  },
  components: { 
    Header,
    Footer},
  data() {
    
  },
  methods: {
  }
}
</script>

<style scoped>
div{
  margin: 0;
  padding: 0;
}
.content{
  margin-top:80px;
}
</style>
