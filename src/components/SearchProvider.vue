<template>
    <div class="row">
        <div class="col-xl-3 col-lg-4" >
            <div class="sidebar-container" >

                <!-- Location -->
                <h2>Search options</h2>
                <form >
                    <div class="sidebar-widget" style="margin-top:30px;">
                        <h3>Location</h3>

                        <div class="input-with-icon">
                            <div id="autocomplete-container">
                                <select name="address" id="cars" asp-items="Model.addresses" style="height:40px; width:170px; padding:0px;">
                                    <option value="" > </option>
                                   
                                </select>
                            </div>
                            <i class="icon-material-outline-location-on"></i>
                        </div>


                    </div>

                    <div class="sidebar-widget">
                        <h3>Per-Hour Wage</h3>
                        <div class="margin-top-5">
                            <select name="perhour" id="cars" asp-items="Model.perhours" style="height: 30px; width: 70px; padding: 0px;">
                                <option value=""> </option>

                            </select>
                        </div>
                    </div>

                   
                    <!-- Keywords -->
                    <div class="sidebar-widget">
                        <h3>Keywords(first or last name)</h3>
                        <div class="input-group">
                            <div class="form-outline">
                                <input name="searchString" type="text" id="form1" class="form-control" placeholder="Enter keyword here..." />

                            </div>

                        </div>
                    </div>
                    <button type="submit" class="btn btnsearch" href="/Provider_list">
                        Search
                    </button>
                </form>
            </div>
        </div>
        <div class="col-xl-9 col-lg-8 content-left-offset">

            <h2 class="page-title">Choose the right person for you</h2>

            <!-- @*<div class="notify-box margin-top-15"> -->
      

            <div class="listings-container grid-layout margin-top-35">
                <!-- @foreach (var item in Model.providersList)
                {
                    var imageLink = "." + item.Image; -->
                
                   <ProviderListing />



<!--  -->
                <!-- } -->
               
            </div>

            <!-- Pagination -->
            <!-- Pagination / End -->

        </div>
    </div>
</template>
<script>
import ProviderListing from './ProviderListing.vue';
export default {
    name: 'SearchProvider',
      components: {
    ProviderListing,
  },
}
</script>

<style scoped>

</style>