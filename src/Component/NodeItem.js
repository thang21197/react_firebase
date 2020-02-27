import React, { Component } from 'react';
import { connect } from 'react-redux';

class NodeItem extends Component {
  clickEdit  = () => {
    let dataEdit=[];
    dataEdit.key=this.props.idtoggle;
    dataEdit.title=this.props.title;
    dataEdit.content=this.props.content;
    // console.log(dataEdit);
    this.props.isChangeStatus();
    this.props.getDataEdit(dataEdit)
  } 
    render() {
        return (
         <div className="card">
            <div className="card-header" role="tab" id="section2HeaderId">
              <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#accordianId" href={"#"+this.props.idtoggle} aria-expanded="true" aria-controls="section2ContentId">
                 {this.props.title}
                </a>
                <div className="btn-group float-right">
                    <button className="btn btn-outline-info" onClick={() => {this.clickEdit()} }>Sửa</button>
                    <button className="btn btn-outline-secondary">Xóa</button>
                </div>
              </h5>
            </div>
            <div id={this.props.idtoggle} className="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
              <div className="card-body">
              {this.props.content}
              </div>
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
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    isChangeStatus: () => {
      dispatch({type:"SHOW_FORM"})
    },
    getDataEdit: (dataEdit) => {
      dispatch({type:"GET_DATA_EDIT",dataEdit})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NodeItem)