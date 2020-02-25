import React, { Component } from 'react';
import { connect } from 'react-redux';
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addData: (getData) => {
      dispatch({type:"ADD_DATA",getData})
    }
  }
}

class NodeForm extends Component {
     constructor(props) {
       super(props);
       
     }
    isChange = (event) =>{
       let name=event.target.name;
       let value=event.target.value;
       this.setState({
         [name]:value
       })
    }
    isSave = () =>{
     this.props.addData(this.state);
    }
    render() {
        
        
        return (
            <div className="col-md-4">
        <div className="card bg-light mb-4" style={{}}>
          <div className="card-body text-center">
            <h3 className="card-title text-center">Edit Note list</h3>
            <div className="form-group">
              <input type="text" className="form-control" name="title" onChange={(event) =>{this.isChange(event)}} aria-describedby="helpId" placeholder="Title" />
            </div>
            <div className="form-group">
              <textarea className="form-control"  name="content" onChange={(event) =>{this.isChange(event)}}  rows={3} placeholder="Content" defaultValue={""} />
            </div>
            <button type="submit" onClick={() =>{this.isSave()}}className="btn btn-primary px-5">Save</button>
          </div>
        </div>
      </div>
        );
    }
}
export default connect(null,mapDispatchToProps)(NodeForm);