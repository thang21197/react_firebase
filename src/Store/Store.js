import {firebaseConnect} from '../firebaseConnect';

var redux=require('redux');
const nodeListInitialState = {}
const allReducer = (state = nodeListInitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            console.log(action.getData);
            return state
        default:
            return state
    }
}
var store=redux.createStore(allReducer);
export default store;