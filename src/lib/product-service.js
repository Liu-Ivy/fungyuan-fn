import axios from "axios";

class Product {
  constructor() {
    this.product = axios.create({
      baseURL:`${process.env.REACT_APP_BASE_URL}/product`,
      withCredentials: true
    });
  }
  getProduct(id) {
    return this.product.get(`/getCategory/${id}`)
        .then(({ data }) => {
          return data
        });
    } 
  getOneProduct(id) {
    return this.product.get(`/getOne/${id}`)
        .then(({ data }) => {
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