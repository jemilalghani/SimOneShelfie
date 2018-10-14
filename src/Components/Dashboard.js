import React, { Component } from 'react';
import Product from './Product';
// import './Dashboard.css';
import axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super();
    this.delete=this.delete.bind(this);
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
        <Product el={el} name={el.name} price={el.price} URL={el.image_url} onEditClickAPP={this.props.onEditClickAPP} delete={this.delete} id={el.product_id}></Product> 
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
