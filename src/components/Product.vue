<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
let productList = ref([]);

const getProductList = async () => {
  const url = 'https://dummyjson.com/products'; 

  const data = await axios.get(url);
  productList.value = data.data.products;

}

onBeforeMount(() => {
    getProductList();
})

function navigateToDetail(id) {
    router.push(`/product/${id}`)
}

</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" style="height: 330px;"  v-for="product in productList" :key="product.id">
                <div class="card h-100">
                    <img :src="product.thumbnail" class="card-img-top h-50" alt="product Image">
                    <div class="card-body">
                        <p class="d-flex justify-content-between fw-bold">
                            <span class="card-title">{{ product.title }}</span>
                            <span class="card-title">Price: ${{ product.price }}</span>
                        </p>
                       
                    </div>
                    <div class="text-center mb-3">
                        <button class="btn btn-primary" @click="navigateToDetail(product.id)">View Details</button>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
    <div class="text-center mt-5">
        <div class="spinner-border" role="status" v-show="productList?.length === 0">
            <span class="visually-hidden" >Loading...</span>
        </div>
    </div>
</template>