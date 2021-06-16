<template>
    
    <div class="col-sm-12 main" style="margin-top:10%;margin-left:2%;">
                <div class="row">
                    <div class="col-sm-12 main">
                        <div class="row row1">
                            <h3 class="page-header">Provider List</h3>
                            
                            <div class="table-responsive">

                                <table id="example" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>Name</th>

                                            <th>Image</th>
                                            <th>Category</th>
                                            <th>Description</th>
                                            <th>No. of Jobs Done</th>

                                            <th>Recommendation</th>
                                            <th>PerHourWage</th>
                                          

                                        </tr>
                                    </thead>
                                    <tbody  :key="provider.provider_id" v-for="provider in providers">
                                   
                                                    <tr>

                                                        <td>
                                                            <span>{{provider.firstName}}</span>
                                                            <span>{{provider.lastName}} </span>

                                                        </td>
                                                        <td>
                                                            {{provider.image}}
                                                            <!-- <img src="@Html.DisplayFor(modelItem => uid.Image)" width="50px" height="50px" /> -->
                                                        </td>
                                                        <td>{{provider.category}}</td>
                                                        <td>{{provider.description}}</td>


                                                        <td>{{provider.jobs_done}}</td>
                                                        <td><a href="{{provider.recommendation}}" style="text-decoration: none;">Recommendation Link</a> </td>
                                                        <td>{{provider.per_hour_wage}}</td>
                                                        



                                                    </tr>
                                              
                                     
                                    </tbody>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
     name: 'ProviderDataTable',
  props: {
      providers:Array,
  },
 
 
  methods: {
    
  }
}

</script>
<style scoped>

</style>