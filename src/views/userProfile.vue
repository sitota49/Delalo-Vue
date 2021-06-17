<template>
    
<div class="dashboard-container" >

    <div class="dashboard-sidebar">
        <div class="dashboard-sidebar-inner" data-simplebar>
            <div class="dashboard-nav-container">

                <!-- Responsive Navigation Trigger -->
                <a href="#" class="dashboard-responsive-nav-trigger">
                    <span class="hamburger hamburger--collapse">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </span>
                    <span class="trigger-title">Dashboard Navigation</span>
                </a>

                <!-- Navigation -->
                <div class="dashboard-nav">
                    <div class="dashboard-nav-inner" >

                        <ul data-submenu-title="Start">
                            <li><a href="#"><i class="icon-material-outline-dashboard"></i> My Account</a></li>
                            <li><a asp-page="/Orders"><i class="icon-material-outline-star-border"></i> orders</a></li>

                           <!-- if statement -->
                                <li><a href="/Jobs"><i class="icon-material-outline-rate-review"></i> Jobs</a></li>
                                <li><a href="/Orders"><i class="icon-material-outline-rate-review"></i> Reviews</a></li>
                                <li><a href="/Orders"><i class="icon-material-outline-rate-review"></i> Ratings</a></li>
                            







                            <li><a href="/Profile"><i class="icon-material-outline-rate-review"></i> Update</a></li>
                        </ul>


                        <ul data-submenu-title="Account">
                            <li class="active"><a href="#"><i class="icon-material-outline-settings"></i> Settings</a></li>
                            <li><a href="/Logout"><i class="icon-material-outline-power-settings-new"></i> Logout</a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    </div>
    
    <div class="dashboard-content-container" data-simplebar >
     

        <div class="dashboard-content-inner" >

            <!-- Dashboard Headline -->
            <div class="dashboard-headline">
                <h3>Account</h3>

                <!-- Breadcrumbs -->

            </div>

            <!-- Row -->
            <div class="row">

                <!-- Dashboard Box -->
                <div class="col-xl-12">
                    <div class="dashboard-box margin-top-0">

                        <!-- Headline -->
                        <div class="headline">
                            <h3><i class="icon-material-outline-account-circle"></i> My Account</h3>
                        </div>

                        <div class="content with-padding padding-bottom-0">

                            <div class="row" >

                                <!-- for item in user providers -->
                                
                                    <!-- if email session == item.email -->
                                    
                                       
                                        <div class="col-auto">
                                                <div class="avatar-wrapper"  data-tippy-placement="bottom" title="Change Avatar">
                                                  
                                                    
                                                     <img src="" alt="">
                                                      <!-- item.image -->
                                                   


                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="row">

                                                    <div class="col-xl-6">
                                                        <div class="submit-field" >
                                                            <h5>First Name</h5>
                                                            <p>{{user.user_info.firstname}}</p>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-6">
                                                        <div class="submit-field" >
                                                            <h5>Last Name</h5>
                                                            <p>{{user.user_info.lastname}}</p>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-6">
                                                        <!-- Account Type -->
                                                        <div class="submit-field" >
                                                            <h5>Account Type</h5>
                                                            <div class="account-type">
                                                                <div>
                                                                    <button class="btn" style="margin-top:30px; background-color:#301934; color:#ffffff;">{{user.user_info.role}}</button>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-6">
                                                        <div class="submit-field" >
                                                            <h5>Email</h5>
                                                            <p>{{user.user_info.email}}</p>
                                                        </div>
                                                    </div>




                                                </div>
                                                <div class="row">

                                                    <div class="col-xl-6">
                                                        <div class="submit-field" >
                                                            <h5>Phone Number</h5>
                                                            <p>{{user.user_info.phone}}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <!-- }

                                    } -->




                                </div>

                        </div>
                    </div>
                </div>

                <!-- Dashboard Box -->
                <div class="col-xl-12" :key="user.user_info.id" v-if="user.user_info.role === 'provider'">
                    <div class="dashboard-box" >

                        <!-- Headline -->

                       <!-- for items1 in userProviders -->
                        
                           <!-- if session .email == items1,.email -->
                            
                                <!-- for each item in providerlist -->
                                <!-- { -->
                                    <!-- var userId = item1.Id; -->
                                    <!-- if (item.UserId == userId) -->
                                    <!-- { -->
                                        <div class="headline" >
                                            <h3><i class="icon-material-outline-face"></i> Info</h3>
                                        </div>
                                        <div class="content"  >
                                            <ul class="fields-ul">
                                                <li>
                                                    <div class="row">


                                                        <div class="col-xl-4">
                                                            <div class="submit-field"  >
                                                                <div class="bidding-widget" >
                                                                    <!-- Headline -->
                                                                    <span class="bidding-detail"><strong>Hourly rate</strong></span>

                                                                    <!-- Slider -->
                                                                    <p>{{user.prov_info.per_hour_wage}}</p>
                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div class="col-xl-4">
                                                            <div class="submit-field" >
                                                                <h5>Attachments</h5>

                                                                <!-- Attachments -->
                                                                <div class="margin-top-0 margin-bottom-0">
                                                                    <div class="attachment-box ripple-effect">

                                                                        <a href={{{provider.prov_info.recommendation}}>
                                                                            <span>Recommendation Letter</span>
                                                                            <i>PDF</i>
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                                <div class="clearfix"></div>

                                                                <!-- Upload Button -->


                                                            </div>
                                                        </div>

                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="submit-field" >
                                                                <h5>Category</h5>
                                                                <p>{{user.prov_info.category}} </p>
                                                            </div>
                                                        </div>

                                                        <!-- <div class="col-xl-6">
                                                            <div class="submit-field" :key="user.id" v-if="user.role === 'provider'">
                                                                <h5>Nationality</h5>
                                                                <p> {{provider.nationality}}</p>
                                                            </div>
                                                        </div> -->



                                                    </div>
                                                    <div class="row">


                                                        <div class="col-xl-6">
                                                            <div class="submit-field">
                                                                <h5>Description</h5>
                                                                <p> {{user.prov_info.description}}</p>
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-6">
                                                            <div class="submit-field">
                                                                <h5>Reviews</h5>
                                                                <p>{{user.prov_info.review}}</p>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="submit-field">
                                                                <h5>Jobs Done</h5>
                                                                <p> {{user.prov_info.jobs_done}}</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="submit-field">
                                                                <h5>Average Rating</h5>
                                                                <p> {{user.prov_info.average_rating}}</p>
                                                            </div>
                                                        </div>





                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- }
                                }
                            }
                        } -->
                    </div>
                </div>

                <!-- Dashboard Box -->
                <!-- Button -->
               

            </div>
            <!-- Row / End -->
            <!-- Footer -->
            <!-- Footer / End -->

        </div>
    </div>
    <!-- Dashboard Content / End -->

</div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
   
  },
  components: {
   
  },
data() {
    return {
        id: this.$route.params.id,
        user_id: this.$route.params.id,
        provider:null,
        user:null
   
}
  },
  methods: {
//     async fetchUsers() {
//       const res = await fetch('http://localhost:51044/delalo/users')

//       const data = await res.json()

//       return data
//   },
  async fetchUser(id) {
      const res = await fetch(`http://localhost:51044/delalo/users/${id}`)

      const data = await res.json()

      return data
    },
    async fetchProvider(user_id) {
      const res2 = await fetch(`http://localhost:51044/delalo/providers/${user_id}`)

      const data = await res2.json()

      return data
    }
  },
    async created() {
    const res= await this.fetchUser(this.id);
   
    if(res){

        this.user = res;
    }
    const res2= await this.fetchProvider(this.user_id);
    if(res2){

        this.provider = res2;
    }
        console.log(res2)
    },
   
    
}



</script>
<style>
    
    @import '../assets/style2.css';
    /* @import '../assets/blue.css'; */
    /* @import '../assets/styles.css'; */
    
</style>