<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params.id)

const productDetail = reactive({});

const params = new URLSearchParams(window.location.search);

const getProductDetail = async () => {
    const url = `https://dummyjson.com/products/${route.params.id}`; 

    const response = await axios.get(url);
    Object.assign(productDetail, response.data); 

}

onMounted(() => {
    getProductDetail();
})

</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-1 g-4" v-show="productDetail.id">
            <div class="col">
                <div class="card">
                    <div class="row  h-100">
                        <div class="col">
                            <img :src="productDetail.thumbnail" class="card-img-top" alt="blog Image" style="">
                        </div>
                        <div class="col">
                            <div class="card-body">
                            <h5 class="card-title my-3">{{ productDetail.title }}</h5>
                            <h5 class="card-title my-3">${{ productDetail.price }}</h5>
                            <p class="card-text">{{ productDetail.description }}</p>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
          
        </div>
    </div>
    <div class="text-center mt-5">
        <div class="spinner-border" role="status" v-show="!productDetail.id">
            <span class="visually-hidden" >Loading...</span>
        </div>
    </div>
</template>