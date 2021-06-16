<template>
 <div class="container" style="margin-top:7%;margin-left:15%;">
        <div class="row">
            <div class="col-md-10">
                <div class="card" style="border-radius:5px; height:100%; padding-bottom:20px;">
                    <div class="card-body" style="padding:4px 2px 2px 7px;">
                        <div class="col-md-4">
                            <a asp-page="/Index" asp-route-providerId="@Model.providerId">
                            <img src="../assets/logo.jpg" style="width:300px; height:200px; margin-top:15%; padding:10%;"></a>
                            
                        </div>
                        <div class="col-md-4" style="padding:2px 2px 2px 70px;">
                            <div class="row">
                                <div class="col-12 mx-auto">
                                    <div class="myform form ">
                                        <h3 style="padding-bottom:15px;">   Welcome </h3>
                                        <h3 style="padding-bottom:15px;"> Login      |      SignUp </h3>
                                        <form action="" method="post" name="login">
                                            <div id="authBtns" class="form-group">

                                                <div class="text-center ">
                                                    <router-link to="Register"> <a type="button" class="btn btn-block send-button button1 my-2">Sign Up</a></router-link>
                                                </div>
                                                <div class="text-center ">
                                                <router-link to="Login"><a type="button" class="btn btn-block btn-outline-secondary send-button button2 my-2">Log In</a></router-link>
                                                </div>



                                            </div>
                                            <div id="terms" class="form-group">
                                                <span>
                                                    By signing up  you agree to our
                                                    <router-link to="/Privacy"><a target="_blank" href="/Privacy" id="specLink">Terms of Service</a></router-link>
                                                    and
                                                    <router-link to="/Privacy"><a target="_blank" href="/Privacy" id="specLink">Privacy Policy</a></router-link>
                                                </span>
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
    
</template>
<script>
export default {
  name: 'Authen',
  props: {
   
  },
  components: {
   
  },
  data() {
    
  },
  methods: {
  }
}
</script>


<style>
   
    @import '../assets/styleAuth.css';
    /* @import '../assets/styles.css';
    @import '../assets/style3.css'; */
   
    
</style>




