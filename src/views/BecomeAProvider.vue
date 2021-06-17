<template>
    
<div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">


        <div class="dashboard-headline">
            <h3 style="margin-top:40px;">Register</h3>
        </div>


        <div class="row">

            <!-- Dashboard Box -->
            <form @submit="onSubmit">
                <div class="col-xl-12" id="dashbord">
                    <div class="dashboard-box margin-top-0">

                        <!-- Headline -->
                        <div class="headline">
                            <h3><i class="icon-material-outline-account-circle"></i> My Account</h3>
                        </div>

                        <div class="content with-padding padding-bottom-0">

                            <div class="row">

                                <div class="col-auto">
                                    <div class="avatar-wrapper" data-tippy-placement="bottom" title="Change Avatar">
                                        <img class="profile-pic" src="images/user-avatar-placeholder.png" alt="" />
                                        <div class="upload-button"></div>
                                        <input  class="file-upload" type="file" accept="image/*" />
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="row">

                                        <div class="col-xl-6">
                                            <div class="submit-field">
                                                <label >First Name</label>
                                                <!--<h5 asp-for="User.">First Name</h5>-->
                                                <input  type="text" class="with-border"  v-model="firstname" required>
                                            </div>
                                        </div>

                                        <div class="col-xl-6">
                                            <div class="submit-field">
                                                <label>Last Name</label>
                                               
                                                <input type="text" class="with-border" v-model="lastname" required>
                                            </div>
                                        </div>

                                        <div class="col-xl-6">
                                            <!-- Account Type -->
                                            <div class="submit-field">
                                                <label >Phone number</label>
                                                <input type="text" class="with-border" v-model="phone"  required/>
                                            </div>
                                        </div>

                                        <div class="col-xl-6">
                                            <div class="submit-field">
                                                <label>Email</label>
                                               
                                                <input type="text" class="with-border" v-model="email" required/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!--password here-->

                <div class="col-xl-12" id="password">
                    <div id="test1" class="dashboard-box">

                        <!-- Headline -->
                        <div class="headline">
                            <h3><i class="icon-material-outline-lock"></i> Password & Security</h3>
                        </div>

                        <div class="content with-padding">
                            <div class="row">


                                <div class="col-xl-4">
                                    <div class="submit-field">
                                        <h5>Password</h5>
                                        <input type="password" v-model="password_hash" class="with-border" >
                                    </div>
                                </div>
                                
                                <div class="col-xl-4">
                                    <div class="submit-field">
                                        <h5>Confirm Password</h5>
                                        <input type="password"  class="with-border" >
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- Dashboard Box -->
                    <div class="col-xl-12">
                        <div class="dashboard-box">

                            <!-- Headline -->
                            <div class="headline">
                                <h3><i class="icon-material-outline-face"></i> My Profile</h3>
                            </div>

                            <div class="content">
                                <ul class="fields-ul">
                                    <li>
                                        <div class="row">
                                            <div class="col-xl-4">
                                                <div class="submit-field">
                                                    <div class="bidding-widget">
                                                        <!-- Headline -->
                                                        <span class="bidding-detail">Set your <strong>minimal hourly rate</strong></span>

                                                        <!-- Slider -->
                                                        <div class="bidding-value margin-bottom-10">$<span id="biddingVal"></span></div>
                                                        <input  class="bidding-slider" type="text" value="" data-slider-handle="custom" data-slider-currency="$" data-slider-min="5" data-slider-max="500" data-slider-value="0" data-slider-step="1" data-slider-tooltip="hide" />
                                                    </div>
                                                </div>
                                            </div>



                                            <div class="col-xl-4">
                                                <div class="submit-field">
                                                    <div class="upload-button"></div>
                                                    <label >Enter your recommendation letter link (Uploaded from google drive)</label>
                                                    <input  type="url" v-model="recommendation" required />
                                                    <p><small>For more information on how to upload a file to google drive <a href="https://youtu.be/GQVGr_OM18Q" style="text-decoration: none;">click here</a></small></p>
                                                  
                                                    <!-- Attachments-->
                                                    <div class="clearfix"></div>

                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </li>
                                    <li>
                                        <div class="row">
                                              <div class="col-xl-6">
                                                <div class="submit-field">
                                                    <h5>Choose a Category</h5>
                                                    <select class=" form-control" v-model="category" title="search category" data-live-search="true" required>

                                                        <!-- @for (int i = 0; i < Model.categorylist.Count; i++)
                                                        {
                                                            if (i == 0)
                                                            { -->
                                                                <option selected>@Model.categorylist[i].Name</option>
                                                                continue;
                                                            <!-- } -->

                                                            <option>@Model.categorylist[i].Name</option>
                                                        <!-- } -->

                                                      

                                                    </select>
                                                </div>
                                            </div>

                                        
                                            <div class="col-xl-6">
                                                <div class="submit-field">
                                                    <h5>Area avaliable</h5>
                                                    <select class="form-control" v-model="address" title="city residence"  data-live-search="true" required>
                                                        <option selected >Addis Ababa</option>
                                                        <option >Dire Dawa</option>
                                                        <option >Bahir Dar</option>
                                                        <option >Hawassa</option>

                                                    </select>
                                                </div>
                                            </div>

                                      
                                            <div class="col-xl-12">
                                                <div class="submit-field">
                                                    <h5>Description about what you do...</h5>
                                                    <textarea cols="30" rows="5" class="with-border" placeholder="description..."></textarea>
                                                </div>
                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Dashboard Box -->

                </div>

                <!-- Button -->
                <div class="col-xl-12">
                    <p>Note: Your request will be processed once you save your changes. You will be listed as a provider once the verfication is done!</p>
                    <button class="button ripple-effect big margin-top-30" type="submit" style="margin-top:20px; width:100px; height:40px; font-size:18px;background-color:#301934; color:#ffffff;">
                        Save Changes
                    </button>

                </div>
            </form>

        </div>
    </div>
     </div>
</template>



// <script>

export default {
  name: 'BecomeAProvider',
  props: {
   
  },
  components: {
   
  },
  data() {
      return{
           firstname: '',
            lastname: '',
            email: '',
            password_hash: '',
            address: '',
            per_hour_wage: '',
            recommendation: '',
            phone: '',
            image: '',
            role: 'user'
      }
  },
   methods: {
    async addProvider(provider) {

        const res = await fetch('http://localhost:51044/delalo/providers', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json'
        },
        body:JSON.stringify(provider)
      })
    console.log("getting here")
    console.log(res);
    console.log(await res.json())
    const data = "" 
    console.log("D",data);
      
      res.status === 200
          ? window.location.href ='../Services'
          : alert('Error')
   

     
    

    },

    onSubmit(e) {
      e.preventDefault()

      if (!this.firstname) {
        alert('Input firstname')
        return
      }
      
      if (!this.lastname) {
        alert('Input lastname')
        return
      }
         if (!this.password_hash) {
        alert('Input password')
        return
      }
         if (!this.phone) {
        alert('Input phone')
        return
      }
         if (!this.email) {
        alert('Input email')
        return
      }
      
         if (!this.address) {
        alert('Input address')
        return
      }
        if (!this.category) {
        alert('Input address')
        return
      }
        if (!this.recommendation) {
        alert('Input address')
        return
      }
        if (!this.per_hour_wage) {
        alert('Input address')
        return
      }

      const newProvider = {
        
        "firstname": this.firstname,
        "lastname": this.lastname,
        "email": this.email,
        "phone": this.phone,
        "password_hash": this.password_hash,
        "address" : this.address,
        "image" : this.image,
        "per_hour_wage" : this.per_hour_wage,
        "category" : this.category,
        "recommendation" : this.recommendation
      }

     this.addProvider(newProvider);

      this.firstname = ''
      this.lastname = ''
      this.email = ''
      this.phone = ''
      this.password_hash = ''
      this.address = ''
      this.image = ''
      this.per_hour_wage = ''
      this.category = ''
      this.recommendation = ''

    },

   
    
  }
};


</script>
<style>

    @import '../assets/styleAuth.css';
    @import '../assets/styles.css';
    @import '../assets/style3.css';
</style>