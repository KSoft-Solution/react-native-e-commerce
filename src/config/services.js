import axios from "./axios";
import { category_Path, product_Path } from "./constants";

export const productServices = {
  getAllProducts: () => {
    return axios.get(product_Path).then((res) => res);
  },
  getCategoryProduct: (category_name) => {
    return axios
      .get(`${product_Path}/category/${category_name}`)
      .then((res) => res);
  },
  getProductDetail: (id) => {
    return axios.get(product_Path + `${id}`).then((res) => res.data);
  },
  createProduct: (data) => {},
  updateProduct: (id) => {},
  deleteProduct: (id) => {},
  getAllCategories: () => {
    return axios.get(product_Path + category_Path).then((res) => res.data);
  },
};
