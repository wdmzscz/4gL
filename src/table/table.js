import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItemAction,editItemAction,cancelItemAction,setInputAction,saveItemAction} from '../redux/action_creator';
import './table.css';

class Table extends Component{


    addItem=()=>{
        this.props.addItem(true)
    }

    cancel=()=>{
        this.props.cancelItem(false)
    }

    save=()=>{
        let data = {
            "model": "accounts_receivable.cusgrp",
            "pk":  (Math.random() * 1000000).toFixed(0),
            "fields": {
                "customer_group": this.groupName.value,
                "csgrp_name": this.customerName.value
            }
        }
        this.props.saveItem(data)
    }

    edit=(name)=>{
        let {csgrp_name} = name.fields;
        this.props.editItem({item:name,isEdit:true, selectId:name.pk})
        this.props.setInput(csgrp_name)
    }


    render(){
        let {isAdd,tableData} = this.props.iniState;
       return(
          <div style={{width:'90%',margin:'0 auto'}}>
            <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Sequence</th>
                <th scope="col">Customer Group</th>
                <th scope="col">Customer Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((item,index)=>{
                        return (
                            <tr key={item.pk}>
                                <td>{index+1}</td>
                                <td>{item.fields.customer_group}</td>
                                <td onClick={()=>this.edit(item)}>{item.fields.csgrp_name}</td>
                            </tr>
                        )
                    })
                }
                { isAdd ?
                   ( <tr>
                        <td></td>
                        <td><input ref={(groupName)=>{this.groupName = groupName}}></input></td>
                        <td><input ref={(customerName)=>{this.customerName = customerName}}></input></td>
                    </tr>
                   ):null
                }
            </tbody>
            </table>

            { !isAdd? <button type="button" className="btn btn-primary" onClick={this.addItem} style={{width: '800px'}}>Add New Item</button>:null}
            {  isAdd? <div> <button type="button"  onClick={this.save} className="btn btn-primary" style={{width: '800px'}}>Save</button>
            &nbsp;&nbsp;
            <button type="button" className="btn btn-danger" onClick={this.cancel} style={{width: '800px'}}>Cancel</button></div>:null
            }
          </div>
       )
    }
}

export default connect(state=>({iniState:state}),{
    addItem:addItemAction,
    editItem:editItemAction,
    saveItem:saveItemAction,
    cancelItem:cancelItemAction,
    setInput:setInputAction
})(Table)