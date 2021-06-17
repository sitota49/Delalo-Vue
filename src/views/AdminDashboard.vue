<template>


   <div class="container-fluid"> 
       
    <AdminHeader />


    <div class="container-fluid">
       
            <AdminSidebar />

            
       
        <div class="row" style="margin-top:10%;margin-left:15%;">
            <h3>Dashboard</h3>
            <div class="col-md-3 grid-margin ">

                <div class="card" style="width: 22rem;">
                    <div class="card-body">
                        <p class="card-title text-md-center text-xl-left">Total users</p>
                        <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                            <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{users.length}}</h3>
                            <i class="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                        </div>
                        <p class="mb-0 mt-2 text-danger"></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 grid-margin ">
                <div class="card" style="width: 22rem;">
                    <div class="card-body">
                        <p class="card-title text-md-center text-xl-left">Total Number of providers</p>
                        <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                            <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{providers.length}}</h3>
                            <i class="ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                        </div>
                        <p class="mb-0 mt-2 text-danger"> </p>
                    </div>
                </div>
            </div>
           
            <div class="col-md-3 grid-margin ">
                <div class="card" style="width: 22rem;">
                    <div class="card-body">
                        <p class="card-title text-md-center text-xl-left">Number of Categories</p>
                        <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                            <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{categories.length}}</h3>
                            <i class="ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                        </div>
                        <p class="mb-0 mt-2 text-success"></p>
                    </div>
                </div>
            </div>
</div>
        <div class="row" style="margin-top:7%; margin-left:15%;">
            <div class="col-md-6 grid-margin stretch-card" >
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-0">Recent Events</h4>
                        <div class="d-flex py-2 border-bottom">
                            <div class="wrapper">
                                <small class="text-muted">Mar 14, 2019</small>
                                <p class="font-weight-semibold text-gray mb-0">Change in Directors</p>
                            </div>
                            <small class="text-muted ml-auto">Edit event</small>
                        </div>
                        <div class="d-flex py-2 border-bottom">
                            <div class="wrapper">
                                <small class="text-muted">Mar 14, 2019</small>
                                <p class="font-weight-semibold text-gray mb-0">Other Events</p>
                            </div>
                            <small class="text-muted ml-auto">Edit event</small>
                        </div>
                        <div class="d-flex py-2 border-bottom">
                            <div class="wrapper">
                                <small class="text-muted">Mar 14, 2019</small>
                                <p class="font-weight-semibold text-gray mb-0">Quarterly Report</p>
                            </div>
                            <small class="text-muted ml-auto">Edit event</small>
                        </div>
                        <div class="d-flex pt-2">
                            <div class="wrapper">
                                <small class="text-muted">Mar 14, 2019</small>
                                <p class="font-weight-semibold text-gray mb-0">Change in Directors</p>
                            </div>
                            <small class="text-muted ml-auto">Edit event</small>
                        </div>
                        <a class="d-block mt-5" href="#">Show all</a>
                    </div>
                </div>
            </div>
         
            <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-0">People Also Watch</h4>
                        <div class="table-responsive">
                            <table class="table table-stretched">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Highest per hour wadge</th>
                                        <th>lowest per hour wadge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- @{ var PerHourWage = Model._mycontext.Providers.Max(p => p.PerHourWage);
                                        var minPerHourWage = Model._mycontext.Providers.Min(p => p.PerHourWage);

                                        var mcategoty = Model._mycontext.Providers.Where(p => p.PerHourWage == PerHourWage).Select(p => p.Category).ToString();
                                    }

                                    @for (int i = 0; i < Model.values.Count; i++)
                                    {

                                    }

                                    @foreach (KeyValuePair<string, decimal[]> item in Model.values)
                                    { -->
                                        <tr>

                                            <td>

                                                <p class="mb-1 text-dark font-weight-medium">Delivery</p><small class="font-weight-medium"></small>
                                            </td>


                                            <td class="font-weight-medium">$59</td>
                                            <td class=" font-weight-medium">$26 </td>
                                        </tr>
                                         <tr>

                                            <td>

                                                <p class="mb-1 text-dark font-weight-medium">Cleaning</p><small class="font-weight-medium"></small>
                                            </td>


                                            <td class="font-weight-medium">$249</td>
                                            <td class=" font-weight-medium">$83 </td>
                                        </tr>
                                         <tr>

                                            <td>

                                                <p class="mb-1 text-dark font-weight-medium">Construction</p><small class="font-weight-medium"></small>
                                            </td>


                                            <td class="font-weight-medium">$158</td>
                                            <td class=" font-weight-medium">$32 </td>
                                        </tr>
                                    <!-- } -->




                                </tbody>
                            </table>
                        </div>
                        <a class="d-block mt-3" href="#">Show all</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
 
  
</template>

<script>

import AdminHeader from '../components/AdminHeader.vue'
import AdminSidebar from '../components/AdminSidebar.vue'

export default {
  name: 'AdminDashboard',
  props: {
   
  },
  components: { 
      AdminHeader,
      AdminSidebar
    
   },
 data() {
     return {
      providers:[],
      users:[],
      categories:[]

    }
  },
  methods:{
      async fetchProviders() {
      const res = await fetch('http://localhost:51044/delalo/providers')

      const data = await res.json()

      return data
    },
      async fetchUsers() {
      const res = await fetch('http://localhost:51044/delalo/users')

      const data = await res.json()

      return data
    },
     async fetchCategories() {
      const res = await fetch('http://localhost:51044/delalo/categories')

      const data = await res.json()

      return data
    },
     
     

  },
    
    async created() {
    const resProviders= await this.fetchProviders();
    if (resProviders.results.length !==0){
        this.providers=resProviders.results;
    }

 const resUsers= await this.fetchUsers();
 
    if (resUsers.length !==0){
        this.users=resUsers;
    }

    const resCategories= await this.fetchCategories();
 
    if (resCategories.length !==0){
        this.categories=resCategories;
    }

    
   
    
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Rubik:300,400,500,700,900");

@import url('../assets/css/style3.css');
@import url('../assets/css/adminCat.css');

.content {
    margin-top: 80px;
}




</style>
