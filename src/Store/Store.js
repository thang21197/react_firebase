import {firebaseConnect} from '../firebaseConnect';

var redux=require('redux');
const nodeListInitialState = {
    isShowFormNode:false,
    DataEdit:[]
}

const allReducer = (state = nodeListInitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            firebaseConnect.push(action.getData);
            return state
        case 'SHOW_FORM':           
            return {...state,isShowFormNode:!state.isShowFormNode}
        case 'GET_DATA_EDIT':
            return {...state,DataEdit:action.dataEdit}
        default:
            return state
    }
}
var store=redux.createStore(allReducer);
// store.subscribe(function(){
//     console.log(store.getState()); 
// })
export default store;