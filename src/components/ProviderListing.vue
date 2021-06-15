<template>
     <a href="/Single_provider" asp-route-id="@item.Id" asp-route-pag="1" class="job-listing">


        <div class="job-listing-details">

            <div class="job-listing-company-logo">
                <!-- <img src="@imageLink" alt=""> -->
            </div>


            <div class="job-listing-description">
                <h4 class="job-listing-company">@item.FirstName @item.LastName  </h4>
            </div>
        </div>

                       
                        <div class="job-listing-footer">
                            <span class="bookmark-icon"></span>
                            <ul style="font-size:15px;">
                                <li><i class="icon-material-outline-location-on"></i> @item.Address</li>
                                <li><i class="fa fas-star"></i>@String.Format("{0:0.0}", item.AverageRating)</li>
                                <li><i class="icon-material-outline-account-balance-wallet"></i> $ @item.PerHourWage</li>
                                <li><i class="icon-material-outline-access-time"></i> @item.JobsDone Jobs Done <i class="fa fa-check-circle" aria-hidden="true" style="color:green;"></i></li>
                            </ul>
                        </div>
                    </a>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>