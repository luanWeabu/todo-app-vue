import { PRODUCT_STATUS } from "@/constants/product-status.constants";

class todoStatusMapper {
  converRawtoLabel(status) {
    switch (status) {
      case PRODUCT_STATUS.TO_DO:
        return "To do";
      case PRODUCT_STATUS.COMPLETED:
        return "Completed";
      case PRODUCT_STATUS.IN_PROGRESS:
        return "In progress";
      case PRODUCT_STATUS.REJECTED:
        return "Rejected";
      case PRODUCT_STATUS.SOLD_OUT:
        return "Sold Out";
      default: {
        return "N/A";
      }
    }
  }
}

export default new todoStatusMapper();
