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
    this.updateItem=this.updateItem.bind(this);
  }
  componentDidMount(){
    axios.get('/api/inventory').then(res=>{
      this.setState({
        inventoryList:res.data
      })
    })
  }
  updateItem(id, name, price, image_url){
    axios.put(`/api/inventory/${id}?/name=${name}&price=${price}&image_url=${image_url}`).then((res)=>{
      this.props.read(res)
    }).catch(error=>console.error("error updateItem in Form", error))
  }
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <div className="body">
          <Dashboard list={this.state.inventoryList} reading={this.componentDidMount}/>
          <Form read={this.componentDidMount} update={this.updateItem}/>
        </div>
      </div>
    );
  }
}

export default App;
