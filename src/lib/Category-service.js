import axios from "axios";

class Category {
  constructor() {
    this.category = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/category`,
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