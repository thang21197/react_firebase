import React, { Component } from 'react';
import NodeForm from './NodeForm';
import NodeList from './NodeList';
import { connect } from 'react-redux';

class Content extends Component {
    showForm   = () => {
      if(this.props.isShowFormNode){
        return <NodeForm/>
      }
    } 
    render() {
        return (
    <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1 className="display-4 text-center">Note List</h1>
            </div>
          </div>
          <NodeList/>
          {this.showForm()}
        </div>
      </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isShowFormNode: state.isShowFormNode
  }
}
export default connect(mapStateToProps)(Content)
