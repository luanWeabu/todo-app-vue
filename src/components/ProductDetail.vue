<template>
  <div>
    <v-btn color="cyan" @click="showEditForm(item.id)"
      ><v-icon>mdi-pen</v-icon>></v-btn
    >
    <v-dialog v-model="isShowingEditProduct" width="600"
      ><product-form :product-id="id" @resetProductList="resetProductList" />
    </v-dialog>
    <v-card v-for="(itemvalue, index) in item" :key="index">
      <v-card-title>{{ index }}</v-card-title>
      <v-card-text> {{ itemvalue }} </v-card-text>
    </v-card>
  </div>
</template>

<script>
import productService from "@/service/product.service";
import ProductForm from "./ProductForm.vue";

export default {
  name: "ProductDetail",
  data() {
    return {
      id: this.$route.params.id,
      item: null,
      isShowingEditProduct: false,
    };
  },
  components: {
    "product-form": ProductForm,
  },
  created() {
    this.getProductDetail();
  },
  methods: {
    async getProductDetail() {
      try {
        this.item = await productService.getProductDetail(this.id);
      } catch (e) {
        ///
      }
    },
    showEditForm(productId) {
      this.isShowingEditProduct = true;
      this.productId = productId;
    },
    resetProductList() {
      this.isShowingEditProduct = false;
      this.getProductDetail();
    },
  },
};
</script>

<style lang="scss" scoped></style>
