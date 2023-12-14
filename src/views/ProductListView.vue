<template>
  <div>
    <v-container>
      <div class="product-header">
        <v-btn @click="toggleShowing(true)">Create Product</v-btn>
        <v-dialog v-model="isShowingCreateProduct" width="600px">
          <product-form
            v-if="isShowingCreateProduct"
            @resetProductList="resetProductList"
          ></product-form>
        </v-dialog>
      </div>
      <div class="product-data">
        <product-list
          :items="items"
          @resetList="refreshProduct"
          @resetProductList="resetProductList"
        ></product-list>
      </div>
    </v-container>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import ProductService from "@/service/product.service";
import ProductForm from "@/components/ProductForm.vue";
import { PRODUCT_STATUS } from "@/constants/product-status.constants";

export default {
  name: "ProductListView",
  components: {
    "product-list": ProductList,
    "product-form": ProductForm,
  },
  data() {
    return {
      isShowingCreateProduct: false,
      items: [],
    };
  },
  mounted() {
    this.refreshProduct();
  },
  methods: {
    toggleShowing(isShowing) {
      this.isShowingCreateProduct = isShowing;
    },
    generateTOdoBadgeStyle(status) {
      switch (status) {
        case PRODUCT_STATUS.COMPLETED:
          return {
            color: "green",
            textcolor: "white",
          };
        case PRODUCT_STATUS.IN_PROGRESS:
          return {
            color: "green",
            textcolor: "white",
          };
        case PRODUCT_STATUS.REJECTED:
          return {
            color: "red",
            textcolor: "white",
          };
        case PRODUCT_STATUS.SOLD_OUT:
          return {
            color: "brown",
            textcolor: "white",
          };
        default:
          return {
            color: null,
            textcolor: "black",
          };
      }
    },
    async refreshProduct() {
      try {
        const items = await ProductService.queryProduct();
        this.items = items.map((item) => ({
          ...item,
        }));
      } catch (e) {
        ///
      }
    },
    resetProductList() {
      this.toggleShowing(false);
      this.refreshProduct();
    },
  },
};
</script>

<style lang="scss"></style>
