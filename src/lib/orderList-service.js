import axios from "axios";

class OrderList {
  constructor() {
    this.orderList = axios.create({
      baseURL:`http://localhost:5000/orderList`,
      withCredentials: true
    });
  }

  getOrderList(id) {
    return this.orderList.get(`/${id}`)
      .then(({ data }) => {
        return data
      });
    } 
  updatedOrderList(newUser){
    return this.orderList.put('/',newUser)
      .then(({ data }) => {
        return data
      });
  }
 }

const orderList = new OrderList();

export default orderList;