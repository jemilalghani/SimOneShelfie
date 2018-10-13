import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';


class Form extends Component {
  constructor(){
    super();
    this.state={
      imageURL:'https://www.cleh.cl/wp-content/uploads/2017/08/make-checkered-patterns-photoshop-vogue-patterns-5550.png',
      productName:'',
      price: 0
    }
    this.handleChange=this.handleChange.bind(this);
    this.cancelButton=this.cancelButton.bind(this);
    this.addTo=this.addTo.bind(this);
  }
  handleChange(key, event){
    this.setState({
      [key]:event,
    })
  }
  cancelButton(){
    this.setState({
      imageURL:'https://www.cleh.cl/wp-content/uploads/2017/08/make-checkered-patterns-photoshop-vogue-patterns-5550.png',
      productName:'',
      price: 0
    })
  }
  addTo(){
    axios.post('/api/inventory', {name:this.state.productName, price:this.state.price, image_url:this.state.imageURL})
    .then((res)=>{
      this.props.read(res);
    }).catch(error=>console.error("error addTo in Form", error));
    this.cancelButton();
  }
  render() {
    return (
      <div className="Form">
        <div className="image"> 
          <img src={this.state.imageURL} alt="" width='200'></img>
        </div>
        Product Name:
        <input value={this.state.productName} onChange={e=>this.handleChange('productName',e.target.value)}/>
        Image URL:
        <input value={this.state.imageURL} onChange={e=>this.handleChange('imageURL',e.target.value)}/>
        Price:
        <input value={this.state.price} onChange={e=>this.handleChange('price',e.target.value)}/>
        <div className="Buttons">
          <button onClick={this.cancelButton}>Cancel</button>
          <button onClick={this.addTo}>Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;
