import axios from "axios";

class Product {
  constructor() {
    this.product = axios.create({
      baseURL:`http://localhost:5000/product`,
      withCredentials: true
    });
  }

  getProduct(id) {
    return this.product.get(`/${id}`)
        .then(({ data }) => {
          console.log('getProduct',data)
          return data
        });
    }  
}

const product = new Product();

export default product;