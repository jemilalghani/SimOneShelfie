import React, { Component } from 'react';
import Product from './Product';
// import './Dashboard.css';

class Dashboard extends Component {
  render() {
    const productList = this.props.list.map((el,i)=>{
      return <div>
        {/* <div key={i}>{el.name} {el.price} {el.image_url}</div> */}
        <Product key={i} name={el.name} price={el.price} URL={el.image_url}></Product> 
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
