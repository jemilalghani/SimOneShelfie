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
      inventoryList:[]
    }
    this.componentDidMount=this.componentDidMount.bind(this);
  }
  componentDidMount(){
    axios.get('/api/inventory').then(res=>{
      this.setState({
        inventoryList:res.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Dashboard list={this.state.inventoryList}/>
        <Form read={this.componentDidMount}/>
        <Header/>
      </div>
    );
  }
}

export default App;
