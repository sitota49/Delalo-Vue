<template>

    <div class="container" style="margin-top:7%;margin-left:15%;">
        <h1>{{ message }}</h1>
        <div class="row">
            <div class="col-md-10">
                <div class="card" style="border-radius:5px; height:100%; padding-bottom:20px;">
                    <div class="card-body" style="padding:4px 2px 2px 7px;">
                        <div class="col-md-4">
                            <a href="/Index">
                            <img src="../assets/logo2.jpg"  style="width:300px; height:200px; margin-top:15%; padding:10%;"></a>
                            
                        </div>
                        <div class="col-md-4" style="padding:2px 2px 2px 70px;">
                            
                            <div>
                                
                                <h3  style="padding-bottom:10px;"> Login    | <router-link to="/Register">SignUp</router-link> </h3>
                                <form method="post">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input class="form-control" name="email">
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input class="form-control" name="password">    
                                    </div>
                                    <button type="submit" class="btn btn-block send-button button1">Log In</button>
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
  name: 'Login',
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
    @import '../assets/styles.css';
    @import '../assets/style3.css';
</style>