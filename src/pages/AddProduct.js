import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import product from '../lib/product-service'

const style = {
  height: '180px',
  width: '180px',
  margin: '10px'
}

class AddProduct extends Component {
  state = {
    category_id: "",
    name: "",
    imageUrl: "",
    description: "",
  }

  handleChange = event => {
    const { name, value } = event.target;
    console.log('name,value', name,value)
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    console.log('this.state', this.state)
    event.preventDefault();
    const { category_id, name, imageUrl, description } = this.state;
    product.createProduct({ category_id, name, imageUrl, description })
    .then(()=>{
      this.props.history.push(`/category`)
    })
  };

  fileOnchange = (event) => {
    const file = event.target.files[0];
    const uploadData = new FormData()
    uploadData.append('photo', file)
  
    product.imageUpload(uploadData)
    .then((imageUrl) => {
      this.setState({
        imageUrl: imageUrl,
      })
    })
    .catch((error) => console.log(error))
  }



  render() {
    const { category_id, name, imageUrl, description } = this.state
    return (
      <div className="add-form">
        <h1>Add a New Product</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Category</label>
            <div className="select">
              <select name="category_id" required onChange={this.handleChange}>
                <option value={category_id}>Find a Category</option>
                <option value="5d35ac811cbe22362f851bcc">Metal Bond</option>
                <option value="5d35ac811cbe22362f851bcd">Mounted-Points</option>
                <option value="5d35ac811cbe22362f851bce">Traditional Grinder Wheels</option>
                <option value="5d35ac811cbe22362f851bc9">Bench Grinder Wheels</option>
                <option value="5d35ac811cbe22362f851bca">Surface Grinder Wheels</option>
                <option value="5d35ac811cbe22362f851bcb">Diamond Dresser</option>
              </select>
            </div>
          </div>
          <label>Product Name</label>
            <input className="input" type="text" name="name" value={name} onChange={this.handleChange}/>
          <label >Description</label>
            <input  className="input" type="description" name="description" value={description} onChange={this.handleChange}/><br/>
          <div>
          <label >Image</label>
          <input  className="input" style={{width: '400px'}} type="file" onChange={this.fileOnchange}></input>
          <img src={imageUrl} alt="" style={style}/>  
          <input  className="input" type="submit" value='submit'/>
        </div>
        </form>
        <Link to="/category"><button>Go Back</button></Link>
      </div>
    )
  }
}

export default AddProduct
