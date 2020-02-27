import React, { Component } from 'react';
import NodeItem from './NodeItem';
import {firebaseConnect} from '../firebaseConnect';

class NodeList extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataArray:[]
    }
  }
  
    componentWillMount(){
      firebaseConnect.on('value', (table) => {
        var array=[];
        table.forEach((node) => {
          const key=node.key;
          const title=node.val().title;
          const content=node.val().content;
          array.push({
            key:key,
            title:title,
            content:content,
          });
        })
        this.setState({
          dataArray:array
        });    
      });
    }
    showDataList   = () => {
        return this.state.dataArray.map((value,key) => {
           return  <NodeItem node={value} key={value.key} idtoggle={value.key} title={value.title} content={value.content}  />
         } )
         
    } 
    render() {
      // this.state.dataArray.forEach((value,key) => {
      //   console.log(value.key);
      // } )
        return (
            <div className="col text-left">
            <div id="accordianId" role="tablist" aria-multiselectable="true">
             {this.showDataList()}     
            </div>
          </div>
        );
    }
}

export default NodeList;