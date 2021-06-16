<template>


   <div class="container-fluid"> 
       
    <AdminHeader />


    <div class="container-fluid">
       
            <AdminSidebar />
            <CategoryDataTable :categories="categories" @delete-category="deleteCategory" @add-category="addCategory" />

         
    </div>
   </div>
 
  
</template>

<script>

import AdminHeader from '../components/AdminHeader.vue'
import AdminSidebar from '../components/AdminSidebar.vue'
import CategoryDataTable from '../components/CategoryDataTable.vue'

export default {
  name: 'AdminCat',
  props: {
   
  },
  components: { 
      AdminHeader,
      AdminSidebar,
      CategoryDataTable
    
   },
   data() {
     return {
      categories:[],
    }
  },
  methods:{
      async fetchCategories() {
      const res = await fetch('http://localhost:51044/delalo/categories')

      const data = await res.json()

      return data
    },
     async fetchCategory(id) {
      const res = await fetch(`http://localhost:51044/delalo/categories/${id}`)

      const data = await res.json()

      return data
    },
      async deltedCategory(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`http://localhost:51044/delalo/categories/${id}`, {
          method: 'DELETE',
        })

        res.status === 200
          ? (this.providers = this.providers.filter((category) => category.id !== id))
          : alert('Error deleting provider')
      }
    },

  },
    
    async created() {
    const res= await this.fetchCategories();
    if (res.length !==0){
        this.categories=res;
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

    .row1 {
            margin-left: 10px;
        }


</style>
