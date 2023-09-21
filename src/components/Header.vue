<script setup>
import axios from 'axios';
import { ref, onMounted } from "vue";

  
let categoryList = ref([]);

const getCategoryList = async () => {
  const url = 'https://basic-blog.teamrabbil.com/api/post-categories'; 
  const data = await axios.get(url);
  categoryList.value = data.data;
}

onMounted(() => {
    getCategoryList();
})
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div class="container-fluid px-5">
    <RouterLink class="navbar-brand" :to="'/'">MY Shop</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" :to="'/'"> Home </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" :to="'/'"> Products </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>

</style>
