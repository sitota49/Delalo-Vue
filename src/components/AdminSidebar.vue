<template>
    
  <div class="sidebar" >
                <ul class="nav nav-sidebar">
                    <li class="active" ><a asp-page="./AdminDashboard">Dashboard <span class="sr-only"></span></a></li>
                    <li><a href="./AdminCat">Categories <span class="sr-only"></span></a></li>

                    <li><a href="./AdminProvider">Providers</a></li>
                
                    <!-- <li><a href="./AdminOrder">Orders</a></li> -->
                  
                    <li><a href="./Logout">Logout</a></li>
                </ul>

</div>
</template>

<script>
export default {
    
}
</script>
<style scoped>

</style>