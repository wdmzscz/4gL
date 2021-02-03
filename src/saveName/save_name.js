import React, {Component} from 'react';
import { deleteItemAction,saveItemAction } from '../redux/action_creator';
import {connect} from 'react-redux';

class SaveName extends Component{

    constructor(props){
        super(props);
        this.props=props;
    }


    render(){
       return(
          <div>
            <div>name</div>
            <div><input ref={(customerName)=>{this.customerName = customerName}}/></div>
            <br/>
            <button type="button" className="btn btn-primary">Save</button>
            &nbsp;&nbsp;
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
       )
    }
}

export default connect(state=>({iniState:state}),{
    saveItem:saveItemAction,
    deleteItem:deleteItemAction
})(SaveName)