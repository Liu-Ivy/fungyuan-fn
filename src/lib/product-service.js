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
          // console.log('getProduct',data)
          return data
        });
    } 
  createProduct(product){
    return this.product.post('/',product)
    .then(({data})=>data)
  }
  imageUpload(file) {
    return this.product.post('/image', file)
    .then(({data}) => data)
  }
  deleteProduct(id){
    return this.product.delete('/'+id, product)
    .then(({data})=>data)
  }
}

const product = new Product();

export default product;