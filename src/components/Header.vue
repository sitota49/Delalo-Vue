<template>
    
    
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <a class="navbar-brand logo" href="/">
                <img src="../assets/logo2.jpg" style="height:60px" />
                <!-- <img src="../assets/logo.png" style="height:60px" /> -->
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mr-5" id="navbarNav">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link links" href="/About" style="color: #735798">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links" href="/Services" style="color: #735798">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links" href="/Contact" style="color: #735798">Contact</a>
                    </li>
                    <!-- @*if session is false display signup/login*@
                    @*else display profile icon*@

                    @{ if (HttpContextAccessor.HttpContext.Session.GetString("email") == null)
                        { -->
                   
                        <div v-if="sesh" >
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user-alt"></i>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>  <a class="dropdown-item" href= "userProfile/id?"  >Profile</a></li>
                                    <!-- @if (HttpContextAccessor.HttpContext.Session.GetString("role") == "provider")
                                                                        { -->
                                <li> <a class="dropdown-item" href="/Jobs">Jobs</a></li>
                            <!-- } -->
                                <li><a class="dropdown-item" href="/Orders">Orders</a></li>
                                <li><a class="dropdown-item" href="/Logout" >Logout</a></li>
                            </ul>
                            </li>
                           
                        </div>

                        <!-- }
                        else
                        { -->


<div v-else>
     <li class="nav-item">
                                <a class="nav-link links" href="/Authen" asp-route-providerId="0" style="color: #735798">Signup/Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="btn btn-outline-secondary providerbtn" href="/BecomeaProvider">Become a Provider</a>
                            </li>

</div>
                    
                                        <!-- } } -->



                </ul>

            </div>

        </nav>


           
</template>

<script>
const sesh = sessionStorage.getItem('token');
export default {
  name: 'Header',
  props: {
   
  },
  components: {
   
  },
data() {
    
    return {
        id: this.$route.params.id,
        user:null
   
}


  },
  
  methods: {
      
  async fetchUser(id) {
      const res = await fetch(`http://localhost:51044/delalo/users/${id}`)

      const data = await res.json()

      return data
    }
  },
   
    async created() {
    const res= await this.fetchUser(this.id);
   
    if(res){

        this.user = res;
    }
    
    }
   
    
}

</script>
<style scoped>

</style>