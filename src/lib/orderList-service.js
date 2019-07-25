import axios from "axios";

class OrderList {
  constructor() {
    this.orderList = axios.create({
      baseURL:`${process.env.REACT_APP_BASE_URL}/orderList`,
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
    console.log('orderList')
    return this.orderList.put('/',newUser)
      .then(({ data }) => {
        return data
      });
  }
 }

const orderList = new OrderList();

export default orderList;