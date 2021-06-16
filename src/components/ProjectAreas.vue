<template>
 <section>
     

      <div class="container my-3 d-flex align-items-center">
    <div class="container row mx-2">
        <!-- @foreach (var item in Model.categoryList)
        { -->

            <div class="card col-md-4 p-3 cardsss" >
                <a id="service-link" href="/EachService" asp-route-id="@item.Id">
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