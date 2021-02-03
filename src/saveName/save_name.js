import React, {Component} from 'react';
import { deleteItemAction,saveItemAction,setInputAction,saveNameAction,editItemAction } from '../redux/action_creator';
import {connect} from 'react-redux';

class SaveName extends Component{

    constructor(props){
        super(props);
        this.props=props;
       
    }

    save=()=>{
        let {selectId,textValue} = this.props.snState
        this.props.saveName({Id:selectId,value:textValue})
        this.props.editItem({isEdit:false})
    }

    delete=()=>{
        let {selectId} = this.props.snState;
        this.props.deleteItem(selectId);
        this.props.editItem({isEdit:false})
    }

    setTextInputRef = element => {
        this.textInput = element;
        
    };

    handleChange=(event)=>{
        this.props.setInput(event.target.value)
    }



    render(){
       return(
          <div>
            <div>name</div>
            <div><input  ref={this.setTextInputRef} onChange={this.handleChange} value={this.props.snState.textValue}/></div>
            <br/>
            <button type="button" onClick={this.save} className="btn btn-primary">Save</button>
            &nbsp;&nbsp;
            <button type="button" onClick={this.delete} className="btn btn-danger">Delete</button>
          </div>
       )
    }
}

export default connect(state=>({snState:state}),{
    saveItem:saveItemAction,
    deleteItem:deleteItemAction,
    setInput:setInputAction,
    saveName:saveNameAction,
    editItem:editItemAction
})(SaveName)