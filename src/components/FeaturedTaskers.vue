<template>
  <section class="taskers">
      <div class='container mx-auto mt-5 col-md-10 mt-100 cardrow' >
              <div class="header">
                  <div class="title text-center" style="color:black; font-weight:bold;">Featured Providers</div>
              </div>

              <div class="row " style="justify-content: center; margin-top:50px;" id="featuredTaskers" :key="provider.provider_id" v-for="provider in topProviders">
                      <div class="card cardrow2" style="width: 18rem; height: 15rem; margin-top: 10px; margin-bottom: 30px; ">
                      <a :href="`/Single_Provider/${provider.provider_id}`"  style="text-decoration:none; color:black;">
                          <div class="card-content">
                              <div class="card-body p-0">
                                  <!-- <div class="profile"> <img src="@provider.Image" alt="@provider.FirstName @provider.LastName "> </div> -->
                                  <div class="card-title" style="font-size:20px;">{{ provider.firstname}} {{provider.lastname}}<br /> <small>${{provider.per_hour_wage}} per hour</small> <br> <small>{{provider.jobs_done}} jobs done</small></div>
                                  <div class="card-subtitle">
                                     <small class="text-muted"> {{Math.trunc(provider.average_rating*100)/100}} &nbsp;</small>
                                      <small :key="i"  v-for='i in parseInt(provider.average_rating)'>
                                        <i class="fas fa-star warning" style="color: #FDCC0D "></i>
                                        </small>
                                     
                                  </div>
                                  <p class="text text-muted">Service:{{provider.category}}</p>
                              </div>
                          </div>
                      </a>
                      </div>
                 
              </div>


          </div>
  </section>
</template>
<script>
export default {
      name: 'FeauteredTaskers',
  props: {
      topProviders:Array,
  },
 
 
  methods: {
    
  }
}
</script>

<style scoped>

</style>