import React, { Component } from 'react';
import NodeForm from './NodeForm';
import NodeList from './NodeList';

class Content extends Component {
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
          <NodeForm/>
        </div>
      </div>
        );
    }
}

export default Content;