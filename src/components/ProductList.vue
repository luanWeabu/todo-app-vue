<template>
  <div>
    <table>
      <thead>
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            :style="{ textAlign: header.align }"
          >
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="(header, index) in headers" :key="index">
            <template
              v-if="['createdAt', 'lastModifiedAt'].includes(header.value)"
            >
              {{ item[header.value] }}
            </template>
            <template v-else>{{ item[header.value] }} </template>
          </td>
          <td>
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="cyan"
              @click="showEditForm(item.id)"
              ><v-icon>mdi-pen</v-icon></v-btn
            >
          </td>
          <td>
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="pink"
              @click="removeItem(item.id)"
              ><v-icon>mdi-delete</v-icon></v-btn
            >
          </td>
          <td>
            <v-btn
              class="mx-2"
              fab
              small
              @click="$router.push(`/product-detail/${item.id}`)"
              ><v-icon large>mdi-information</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <v-dialog v-model="isShowingEditProduct" width="600">
      <product-form
        v-if="isShowingEditProduct"
        :product-id="productId"
        @resetProductList="resetProductList"
      />
    </v-dialog>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import productService from "@/service/product.service";
import ProductForm from "@/components/ProductForm.vue";

export default {
  name: "ProducList",
  props: {
    items: {
      type: Array,
      require: true,
    },
  },
  components: {
    "product-form": ProductForm,
  },
  data() {
    return {
      isShowingEditProduct: false,
      counter: 0,
      myInputModel: "",
      headers: [
        {
          text: "name",
          align: "left",
          value: "name",
        },
        {
          text: "status",
          align: "center",
          value: "status",
        },
        {
          text: "description",
          align: "left",
          value: "description",
        },
        {
          text: "price",
          align: "left",
          value: "price",
        },
        {
          text: "createdAt",
          align: "left",
          value: "createdAt",
        },
        {
          text: "lastModifiedAt",
          align: "left",
          value: "lastModifiedAt",
        },
      ],
    };
    productId: null;
  },
  methods: {
    say(message) {
      alert(message);
    },
    removeItem(id) {
      productService.deleteProduct(id);
      this.$emit("resetList");
    },
    showEditForm(productId) {
      this.isShowingEditProduct = true;
      this.productId = productId;
    },
    resetProductList() {
      this.isShowingEditProduct = false;
      this.$emit("resetProductList");
    },
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
