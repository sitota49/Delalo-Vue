<template>
  <section class="taskers">
      <div class='container mx-auto mt-5 col-md-10 mt-100 cardrow' >
              <div class="header">
                  <div class="title text-center" style="color:black; font-weight:bold;">Featured Providers</div>
              </div>

              <div class="row " style="justify-content: center; margin-top:50px;" id="featuredTaskers">
                  <!-- @foreach (var provider in Model.TopProviders)
                  { -->
                      <div class="card cardrow2" style="width: 18rem; height: 15rem; margin-top: 10px; margin-bottom: 30px; ">
                      <a asp-page="/Single_Provider" asp-route-id="@provider.Id" asp-route-pag="1" style="text-decoration:none; color:black;">
                          <div class="card-content">
                              <div class="card-body p-0">
                                  <!-- <div class="profile"> <img src="@provider.Image" alt="@provider.FirstName @provider.LastName "> </div> -->
                                  <div class="card-title" style="font-size:20px;"> @provider.FirstName @provider.LastName<br /> <small>$@provider.PerHourWage per hour</small> <br> <small>@provider.JobsDone jobs done</small></div>
                                  <div class="card-subtitle">
                                      <!-- <p> <small class="text-muted" >@String.Format("{0:0.0}", provider.AverageRating) @for (var i = 0; i < (int)provider.AverageRating; i++) {<i class="fas fa-star warning" style="color: #FDCC0D "></i> }</small> </p> -->
                                  </div>
                                  <p class="text text-muted">Service: @provider.Category</p>
                              </div>
                          </div>
                      </a>
                      </div>
                  <!-- } -->
              </div>


          </div>
  </section>
</template>
<script>
export default {
    
}
</script>

<style scoped>

</style>