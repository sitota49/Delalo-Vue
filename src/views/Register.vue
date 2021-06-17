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
                                <form @submit="onSubmit" id="val7">
                                    <div class="form-group" id="val1">
                                        <label for="email">Email</label>
                                        <input id="in1" class="form-control" type="email"  v-model="email" name="email" required />
                                    
                                    </div>
                                    <div class="form-group" id="val2">
                                        <label for="firstName">First Name</label>
                                        <input id="in2"  class="form-control" type="text"  v-model="firstname" name="firstname" required />
                                
                                    </div>
                                    <div class="form-group" id="val3">
                                        <label for="lastName">Last Name</label>
                                        <input id="in3" class="form-control" type="text"  v-model="lastname" name="lastname" required />
                                
                                    </div>
                                    <div class="form-group" id="val4">
                                        <label for="password">Password</label>
                                        <input id="in4"  class="form-control" type="password" v-model="password_hash" name="password_hash" required />
                            
                                    </div>
                                    <div class="form-group" id="val5">
                                        <label for="confirmPassword">Confirm Password</label>
                                        <input id="in5"  class="form-control" type="password" v-model="confirmpassword" name="confirmpassword" required />
                                    
                                    </div>
                                    <div class="form-group" id="val6">
                                        <label for="phoneNo">Phone Number</label>
                                        <input id="in6" class="form-control" type="number"  v-model="phone" name="phone" required />
                                    
                                    </div>
                                    <div class="form-group" id="val8">
                                        <label for="address">Address</label><br />
                                        <select id="in8" class=" form-control" title="city residence"  v-model="address" name="address" data-live-search="true" required>
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
      return{
           firstname: '',
            lastname: '',
            email: '',
            password_hash: '',
            address: '',
            phone: '',
            image: '',
            role: 'user'
      }
  },
   methods: {
    async addUser(user) {

        const res = await fetch('http://localhost:51044/delalo/users', {
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
    const data = "" 
    console.log("D",data);
      
      res.status === 200
          ? window.location.href ='../Login'
          : alert('User Successfully created')
   

     
    

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

      const newUser = {
        
        "firstname": this.firstname,
        "lastname": this.lastname,
        "email": this.email,
        "phone": this.phone,
        "password_hash": this.password_hash,
        "address" : this.address,
        "image" : this.image
      }

     this.addUser(newUser);

      this.firstname = ''
      this.lastname = ''
      this.email = ''
      this.phone = ''
      this.password_hash = ''
      this.address = ''
      this.image = ''

    },

   
    
  }
};


</script>

<style>

</style>