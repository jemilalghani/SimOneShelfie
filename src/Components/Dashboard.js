import React, { Component } from 'react';
import Product from './Product';
// import './Dashboard.css';
import axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super();
    this.onEditClick=this.onEditClick.bind(this);
    this.delete=this.delete.bind(this);
  }
  onEditClick(){
    console.log("Hello")
  }
  delete(id){
    axios.delete(`/api/inventory/${id}`).then(()=>{
      this.props.reading();
    })
  }
  render() {
    const productList = this.props.list.map((el,i)=>{
      return <div key={i}>
        {/* <div key={i}>{el.name} {el.price} {el.image_url}</div> */}
        <Product name={el.name} price={el.price} URL={el.image_url} here={this.onEditClick} delete={this.delete} id={el.product_id}></Product> 
             </div>
    })
    return (
      <div className="Dashboard">
        {productList}
      </div>
    );
  }
}

export default Dashboard;
