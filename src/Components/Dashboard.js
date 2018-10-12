import React, { Component } from 'react';
import Product from './Product';

class Dashboard extends Component {
  render(props) {
    let display = this.props.list.map((el,i)=>{
      return <div>
        <h1 key={i}>{el.name} {el.price} <img src={el.image_url} width='300'/></h1>
        <Product name={el.name} price={el.price} URL={el.image_url}></Product> 
             </div>
    })
    return (
      <div className="Dashboard">
        Dashboard
        {display}
      </div>
    );
  }
}

export default Dashboard;
