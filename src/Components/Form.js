import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {
  constructor(){
    super();
    this.state={
      imageURL:'',
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
      imageURL:'',
      productName:'',
      price: 0
    })
  }
  addTo(){
    axios.post('/api/inventory', {name:this.state.productName, price:this.state.price, image_url:this.state.imageURL})
    .then((res)=>{
      this.props.read(res);
    }).catch(error=>("error addTo in Form", error));
    this.cancelButton();
  }
  render() {
    return (
      <div className="Form">
        Form
        Product Name
        <input value={this.state.productName} onChange={e=>this.handleChange('productName',e.target.value)}/>
        <input value={this.state.imageURL} onChange={e=>this.handleChange('imageURL',e.target.value)}/>
        <input value={this.state.price} onChange={e=>this.handleChange('price',e.target.value)}/>
        <button onClick={this.cancelButton}>Cancel</button>
        <button onClick={this.addTo}>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
