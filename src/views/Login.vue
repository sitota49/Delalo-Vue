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
                                <form  @submit="onSubmit">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input class="form-control" name="email" v-model="email">
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input class="form-control" name="password" v-model="password">    
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
        return{
            email: '',
            password: '',
            access_token: '',
            
      }
  },
  methods: {
       async loginUser(user) {

        const res = await fetch('http://localhost:51044/delalo/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json'
        },
        body:JSON.stringify(user)
      })
    console.log("getting here")
    console.log(res);
    console.log(await res.json())
 
      
      res.status === 200
          ? window.location.href ='../Services'
          : alert('Error logging in')
   

     
    

    },
    onSubmit(e) {
      e.preventDefault()

         if (!this.email) {
        alert('Input email')
        return
      }
      
         if (!this.password) {
        alert('Input password')
        return
      }
       const existUser = {
        "email": this.email,
        "password": this.password,
      }
      
    
     this.loginUser(existUser);

      this.email = ''
      this.password = ''

    },
    
     mounted() {
    this.$session.start();
    this.$session.set("email", "user.email");
    this.$session.store("access_token");
    console.log(this.$session.get("email"));
    console.log(this.$session.get("access_token"));
  },
  }
}

</script>
<style>

    @import '../assets/styleAuth.css';
    @import '../assets/styles.css';
    @import '../assets/style3.css';
</style>