import { generateNewId } from "@/utils/generate-new-id.util";

class productService {
  producItems = [
    {
      id: "1",
      name: "Product1",
      description: "Something product1",
      price: 10,
      createdAt: Date(),
      lastModifiedAt: Date(),
      status: "TO DO",
    },
    {
      id: "2",
      name: "Product2",
      description: "Something product2",
      price: 20,
      createdAt: Date(),
      lastModifiedAt: Date(),
      status: "IN PROGRESS",
    },
    {
      id: "3",
      name: "Product3",
      description: "Something product3",
      price: 15,
      createdAt: Date(),
      lastModifiedAt: Date(),
      status: "REJECTED",
    },
    {
      id: "4",
      name: "Product4",
      description: "Something product4",
      price: 25,
      createdAt: Date(),
      lastModifiedAt: Date(),
      status: "Sold Out",
    },
  ];
  async queryProduct() {
    return this.producItems;
  }

  async getProductDetail(id) {
    return this.producItems.find((item) => item.id === id);
  }
  createProduct(payload) {
    const product = {
      ...payload,
    };
    product.id = generateNewId();
    product.createdAt = new Date();
    product.lastModifiedAt = new Date();
    this.producItems.push(product);
  }
  deleteProduct(id) {
    const index = this.producItems.findIndex((item) => item.id === id);

    // kiểm tra xem index có bằng -1 hay không. (Nếu bằng -1 --> product không tồn tại) 
    if (index === -1) {
    } else {
      this.producItems.splice(index, 1);
    }
  }

  editProduct(id, payload) {
    // tìm số index của product có id giống id truyền vào
    const index = this.producItems.findIndex((item) => item.id === id);

    // kiểm tra xem index có bằng -1 hay không. (Nếu bằng -1 --> product không tồn tại)
    if (index === -1) {
    } else {
      // Nếu tồn tại, thì update nó
      // tạo product mới <== payload
      // ghi đè lại product cũ có index vừa tìm --> productItems[...] = { ... } // product
      const product = {
        ...this.producItems[index],
        ...payload,
        lastModifiedAt: new Date(),
        id,
      };
      this.producItems.splice(index, 1, product);
    }
  }
}

export default new productService();
