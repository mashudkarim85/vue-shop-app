import { createRouter, createWebHistory } from "vue-router";
const Product = () => import("../components/Product.vue");
const ProductDetail = () => import("../components/ProductDetail.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Product",
      component: Product,
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      component: ProductDetail,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/"
    },
  ],
});

export default router;
