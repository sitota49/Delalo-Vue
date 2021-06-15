<template>
<div class="container-fluid" >
  <Header/>
<div class="container content">
   <div class="single-page-header freelancer-header mt-5" data-background-image="images/single-freelancer.jpg">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="single-page-header-inxner">
                    <div class="left-side">
                        <div class="header-image freelancer-avatar">
                            <!-- <img src="../.@Model.providerUser.Image" alt=""> -->
                            </div>
                        <div class="header-details">
                            <h3>@Model.providerUser.FirstName @Model.providerUser.LastName</h3>
                            <ul>
                                <!-- <li><div class="star-rating" data-rating="@String.Format("{0:0.0}", Model.providerUser.AverageRating)"></div></li> -->
                                <li><i class="fas fa-map-marker-alt"></i>&nbsp;@Model.providerUser.Address</li>
                                <li><div class="verified-badge-with-title">Verified</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Page Content
================================================== -->
<div class="container">
    <div class="row">

        <!-- Content -->
        <div class="col-xl-8 col-lg-8 content-right-offset">

            <!-- Page Content -->
            <div class="single-page-section">
                <h3 class="margin-bottom-25">About Me</h3>
                <p>@Model.providerUser.Description</p>
            </div>

         <ReviewList/>

            <!-- Boxed List / End -->

        </div>


        <!-- Sidebar -->
        <div class="col-xl-4 col-lg-4">
            <div class="sidebar-container">

                <!-- Profile Overview -->
                <div class="profile-overview">
                    <div class="overview-item"><strong>$@Model.providerUser.PerHourWage</strong><span>Hourly Rate</span></div>
                    <div class="overview-item"><strong>@Model.providerUser.JobsDone</strong><span>Jobs Done</span></div>
                </div>

            
                <!-- @if (Model.loggedUserEmail == null)
                {  -->
                    <a asp-page="/AuthOption" asp-route-providerId="@Model.providerUser.Id" class="apply-now-button popup-with-zoom-anim margin-bottom-50 btn btn-primary">
                        Sign In to hire
                    </a>
                <!-- }
                else
                {
                    if (Model._order == null)
                    { -->
                        <button type="button" class="apply-now-button popup-with-zoom-anim margin-bottom-50 btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            HIRE
                        </button>
<!-- 
                    }
                    else
                    {
                        if (Model._order.Status == "accepted")
                        {
                            <h4 class="text-success text-center">Task undertaking...</h4>
                        }
                        else if (Model._order.Status == "pending")
                        {
                            <h4 class="text-primary text-center">Your request is being processed...</h4>
                        }
                    }

                } -->

             


            </div>
        </div>

    </div>
</div>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Are You sure you want to hire @Model.providerUser.FirstName @Model.providerUser.LastName?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <!-- @if (Model.loggedUserEmail == null)
                { -->
                    
                <!-- }
                else
                { -->
                    <form asp-route-providerId="@Model.providerUser.ProviderId" asp-route-loggedUserId="@Model.loggedUser.Id" asp-route-providerUserId="@Model.providerUser.Id" asp-page-handler="hire" method="post">
                        <button class="btn btn-primary">Confirm</button>
                    </form> 
                }
                
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
import ReviewList from '../components/ReviewList.vue'

export default {
  name: 'SingleProvider',
  props: {
   
  },
  components: { 
    Header,
    Footer,
    ReviewList
  },
  data() {
    
  },
  methods: {
  }
}
</script>

<style scoped>
@import url('../assets/css/blue.css');
@import url('../assets/css/style2.css');

</style>