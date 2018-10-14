import React, { Component } from 'react';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Header from './Components/Header';

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      inventoryList:[],
      currentItem:{},
    }
    this.componentDidMount=this.componentDidMount.bind(this);
    this.onEditClick=this.onEditClick.bind(this);
  }
  componentDidMount(){
    axios.get('/api/inventory').then(res=>{
      this.setState({
        inventoryList:res.data
      })
    })
  }
onEditClick(item){
  this.setState({
    currentItem:item
  })
}
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <div className="body">
          <Dashboard list={this.state.inventoryList} reading={this.componentDidMount} onEditClickAPP={this.onEditClick}/>
          <Form read={this.componentDidMount} update={this.updateItem} currentItem={this.state.currentItem}/>
        </div>
      </div>
    );
  }
}

export default App;
