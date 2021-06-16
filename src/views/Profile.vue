<template>
    
<div class="dashboard-content-container" data-simplebar>

    <div class="dashboard-content-inner" >


        <div class="dashboard-headline">
            <h3>Profile</h3>
        </div>
    </div>
    <!-- @foreach (var item in Model.userList) -->
    <!-- { -->
        <!-- if (HttpContextAccessor.HttpContext.Session.GetString("email") == item.Email.ToString()) -->
        <!-- { -->

            <div class="row">

                <!-- Dashboard Box -->
                <form method="post">
                    <div class="col-xl-12" id="dashbord">
                        <div class="dashboard-box margin-top-0">

                            <!-- Headline -->
                            <div class="headline">
                                <h3><i class="icon-material-outline-account-circle"></i> My Account</h3>

                                <div class="content with-padding padding-bottom-0">

                                    <div class="row">

                                        <div class="col-auto" :key="user.id" v-for="user in users">
                                            <div class="avatar-wrapper" data-tippy-placement="bottom" title="Change Avatar" style="border-radius: 50%">
                                                <img class="profile-pic" src="" alt="" style="border-radius: 50%" />
                                                <div class="upload-button"></div>
                                                <input class="file-upload" type="file" accept="image/*" />
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="row">

                                                <div class="col-xl-6">
                                                    <div class="submit-field" :key="user.id" v-for="user in users">
                                                        <label>First Name</label>
                                                        <!-- <h5 >{{user.firstname}}</h5> -->
                                                        <input type="text" class="with-border" value="" placeholder= {{user.firstname}}>
                                                    </div>
                                                </div>

                                                <div class="col-xl-6">
                                                    <div class="submit-field" :key="user.id" v-for="user in users">
                                                        <label>Last Name</label>

                                                        <input type="text" class="with-border" value="" placeholder={{user.lastname}}>
                                                    </div>
                                                </div>

                                                <div class="col-xl-6">
                                                    <!-- Account Type -->
                                                    <div class="submit-field" :key="user.id" v-for="user in users">
                                                        <label >PhoneNo</label>
                                                        <input type="text" class="with-border" value="" placeholder={{user.phone}}/>
                                                    </div>
                                                </div>

                                                <div class="col-xl-6">
                                                    <div class="submit-field" :key="user.id" v-for="user in users">
                                                        <label >Email</label>

                                                        <input type="email"  class="with-border" placeholder={{user.email}}/>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6">
                                                    <div class="submit-field" :key="user.id" v-for="user in users">
                                                        <label >Address</label>
                                                        <select class="form-control" title="Select Job Type" data-live-search="true" placeholder= {{user.address}})>

                                                            <option value="Addis Ababa">Addis Ababa</option>
                                                            <option value="Bahir Dar">Bahir Dar</option>
                                                            <option value="Gondar">Gondar</option>
                                                            <option value="Hawassa">Hawassa</option>
                                                            <option value="Dire Dawa">Dire Dawa</option>
                                                            <option value="Adama">Adama</option>

                                                        </select>
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
                                            <div class="submit-field" :key="user.id" v-for="user in users">
                                                <h5>Password</h5>
                                                <input type="password" class="with-border">
                                            </div>
                                        </div>

                                        <div class="col-xl-4">
                                            <div class="submit-field" :key="user.id" v-for="user in users">
                                                <h5>Confirm Password</h5>
                                                <input type="password" class="with-border">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!-- Dashboard Box -->

                        </div>

                        <!-- Button -->
                        <div class="col-xl-12">
                            <button class="btn big margin-top-30" style="margin-top:20px; width:100px; height:40px; font-size:18px;background-color:#301934; color:#ffffff;" type="submit">
                                Update
                            </button>

                        </div>
                        </div>
                </form>

            </div>
            <!-- Row / End -->
            <!-- Footer -->

        <!-- }
    } -->


</div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
   
  },
  components: {
   
  },
  data() {
    return {
    users:[],
}
    
  },
  methods: {
    async fetchUsers() {
      const res = await fetch('http://localhost:51044/delalo/users')

      const data = await res.json()

      return data
  },
}
}
</script>

<style>

    /* @import '../assets/styles.css'; */
    /* @import '../assets/blue.css'; */
    @import '../assets/style2.css';
</style>