
import './App.css';
import {firebaseConnect} from './firebaseConnect';
import Nav from './Component/Nav';
import Content from './Component/Content';
import React, { Component } from 'react';
import store from './Store/Store.js';
import { Provider } from 'react-redux';

class App extends Component {

  DataNode = (DataNode) =>{
  //  firebaseConnect.once('value').then(function(snapshot){
  //     console.log(snapshot);
      
  //   });  
  firebaseConnect.push({DataNode});
  }
  render() {
    return (
    <Provider store={store}>
     <div className="App">
      <Nav/>
      <Content/>
    </div>
    </Provider>
    );
  }
}
export default App;
