import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import product from '../lib/product-service';
import "../App.css";
// import Footer from '../components/Footer';

const style = {
  height: '80px',
  width: '80px',
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
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
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
      <>
      <div>
        <h2 className="text-center m-3">Add a New Product</h2>
        <form className="add-form" onSubmit={this.handleFormSubmit}>
            <div className="form-group text-center">
              <label for="exampleFormControlSelect">Find a Category</label>
                <select className="form-control border border-secondary" id="exampleFormControlSelect" name="category_id" required onChange={this.handleChange}>
                  <option value={category_id}>Category</option>
                  <option value="5d384b74fbf2fa0d640da184">Metal Bond</option>
                  <option value="5d384b74fbf2fa0d640da185">Mounted-Points</option>
                  <option value="5d384b74fbf2fa0d640da186">Traditional Grinder Wheels</option>
                  <option value="5d384b74fbf2fa0d640da181">Bench Grinder Wheels</option>
                  <option value="5d384b74fbf2fa0d640da182">Surface Grinder Wheels</option>
                  <option value="5d384b74fbf2fa0d640da183">Diamond Dresser</option>
                </select>
            </div>
            <div className="form-group text-center">
              <label for="labelUsername">Product Name</label>
              <input className="input form-control border border-secondary" id="labelProductName" placeholder="ProductName" type="text" name="name" value={name} onChange={this.handleChange}/>
            </div>
            <div className="form-group text-center">
              <label for="labelDescription">Description</label>
              <input  className="input form-control  border border-secondary" id="labelDescription" placeholder="Description" type="description" name="description" value={description} onChange={this.handleChange}/>
            </div>
          <div className="form-group text-center ">
          <label for="exampleFormControlFile">Image</label>
          <input  className="form-control-file border border-secondary" id="exampleFormControlFile" type="file" onChange={this.fileOnchange}></input>
          <img src={imageUrl} alt="" style={style}/>  
          <input  className="input border border-secondary" type="submit" value='submit'/>
        </div>
        </form>

          <div className="d-flex justify-content-end">
            <Link to="/category"><button className="btn btn-info" active="active" type="submit" value="back">Go Back</button></Link>
          </div>
      </div>
        {/* <div>
          <Footer className="footer"/>
        </div> */}
      </>
    )
  }
}

export default AddProduct
