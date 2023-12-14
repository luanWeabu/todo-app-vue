<template>
  <v-card>
    <v-card-title>
      <h2>{{ formConfig.title }}</h2>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent
        ><v-row>
          <v-col cols="12">
            <v-text-field v-model="productForm.name" label="name" outlined>
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="productForm.description"
              label="description"
              outlined
            >
            </v-textarea>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="productForm.price"
              label="price"
              v-mask="'#####'"
              outlined
              prefix="$"
              type="number"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="resetProduct">Reset</v-btn>
      <v-btn @click="handleSubmit">{{ formConfig.submitButtonLabel }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import productService from "@/service/product.service";

export default {
  name: "ProductForm",

  props: {
    productId: {
      type: String,
      require: false,
      default: null,
    },
  },

  computed: {
    isEditForm() {
      return this.productId !== null;
    },
    formConfig() {
      return this.isEditForm
        ? {
            title: "Edit product",
            submitButtonLabel: "Save",
          }
        : {
            title: "Create product",
            submitButtonLabel: "Create",
          };
    },
  },

  data() {
    return {
      productForm: {
        name: "",
        status: "",
        description: "",
        price: "",
      },
      oldData: null,
    };
  },

  created() {
    if (this.isEditForm) {
      this.fillEditFormData();
    }
  },

  methods: {
    resetProduct() {
      if (this.isEditForm) {
        this.productForm = { ...this.oldData };
      } else {
        this.productForm = {
          name: "",
          status: "",
          description: "",
          price: "",
        };
      }
    },

    handleSubmit() {
      if (this.isEditForm) {
        this.editProduct();
      } else {
        this.createProduct();
      }
    },

    async fillEditFormData() {
      try {
        this.oldData = await productService.getProductDetail(this.productId);
        this.productForm = { ...this.oldData };
      } catch (e) {
        //
      }
    },
    async editProduct() {
      productService.editProduct(this.productId, this.productForm);
      this.$emit("resetProductList");
    },
    async createProduct() {
      productService.createProduct(this.productForm);
      this.$emit("resetProductList");
    },
  },
};
</script>

<style></style>
