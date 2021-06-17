<template>


 <div class="container" style="margin-top:7%;margin-left:15%;">
     <div ></div>
     <h1></h1>
        <div class="row">
            <div class="col-md-10">
                <div class="card" style="border-radius:5px; height:100%; padding-bottom:20px;">
                    <div class="card-body" style="padding:4px 2px 2px 7px;">
                        <div class="col-md-4">
                            <a href="/Index">
                            <img src="../assets/logo2.jpg" style="width:300px; height:200px; margin-top:15%; padding:10%;"></a>
                            
                        </div>
                        <div class="col-md-4" style="padding:2px 2px 2px 70px;">
                            
                            <div>
                                <h3 style="padding-bottom:10px;">  <a asp-page="/Forms/Login" asp-route-providerId="@Model.providerId">Login</a>      |      SignUp  </h3>
                                <form method="post" id="val7">
                                    <div class="form-group" id="val1">
                                        <label for="email">Email</label>
                                        <input id="in1" class="form-control" type="email" required />
                                    
                                    </div>
                                    <div class="form-group" id="val2">
                                        <label for="firstName">First Name</label>
                                        <input id="in2"  class="form-control" type="text" required />
                                
                                    </div>
                                    <div class="form-group" id="val3">
                                        <label for="lastName">Last Name</label>
                                        <input id="in3" class="form-control" type="text" required />
                                
                                    </div>
                                    <div class="form-group" id="val4">
                                        <label for="password">Password</label>
                                        <input id="in4"  class="form-control" type="password" minlength="8" required />
                            
                                    </div>
                                    <div class="form-group" id="val5">
                                        <label for="confirmPassword">Confirm Password</label>
                                        <input id="in5"  class="form-control" type="password" minlength="8" required />
                                    
                                    </div>
                                    <div class="form-group" id="val6">
                                        <label for="phoneNo">Phone Number</label>
                                        <input id="in6" class="form-control" type="number" required />
                                    
                                    </div>
                                    <div class="form-group" id="val8">
                                        <label for="address">Address</label><br />
                                        <select id="in8" class=" form-control" title="city residence" data-live-search="true" required>
                                            <option></option>
                                            <option>Addis Ababa</option>
                                            <option>Dire Dawa</option>
                                            <option>Bahir Dar</option>
                                            <option>Hawassa</option>
                                            <option>Gondar</option>
                                            <option>Adama</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-block send-button button1 ">Sign Up</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
   

</template>



<script>

export default {
  name: 'Register',
  props: {
   
  },
  components: {
   
  },
  data() {
    
  },
  methods: {
  }
};


</script>

<style>

</style>