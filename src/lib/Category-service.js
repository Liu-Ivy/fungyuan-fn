import axios from "axios";

class Category {
  constructor() {
    this.category = axios.create({
      baseURL: "http://localhost:5000/category",
      withCredentials: true
    });
  }

  getAll(){
    return this.category.get('/')
    .then(({ data }) => {
        return data
      });
  }
}

const category = new Category();

export default category;