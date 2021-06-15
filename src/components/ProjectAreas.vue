<template>
 <section>
       <div class="container-fluid d-flex px-5 mx-5 py-3row">
         <h1 class="align-self-center text-center col-md-12 mt-4">Project Areas</h1>
      </div>

      <div class="container my-3 d-flex align-items-center">
    <div class="container row mx-2">
        <!-- @foreach (var item in Model.categoryList)
        { -->

            <div class="card col-md-4 p-3 cardsss" >
                <a id="service-link" asp-page="/EachService" asp-route-id="@item.Id">
                    <!-- <img id="hover-img" src="@item.Image" class="card-img-top" alt="..." style="height: 15rem"> -->
                    <div class="card-body ">
                        <h5 class="text-center">@item.Name</h5>
                        
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