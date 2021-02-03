import {ADDITEM,EDITITEM,DELETEITEM,SAVEITEM,CANCELITEM,SETINPUT,SAVENAME} from './action_types';
import dataSource from '../tableData';

let initState={
    isEdit:false,
    isAdd:false,
    editItem:null,
    textValue:'',
    selectId:NaN,
    tableData:dataSource
}

export default function operateItem(preState=initState,action){
    const {type,data} = action
    let newState
    switch (type) {
        case ADDITEM:
            newState=Object.assign({},preState,{
                isAdd:data,
            })
            return newState

        case CANCELITEM:
            newState=Object.assign({},preState,{
                isAdd:data,
            })
            return newState
        case EDITITEM:
            newState=Object.assign({},preState,{
                isEdit:data.isEdit,
                editItem:data.item,
                selectId:data.selectId
            })
            return newState
        
        case DELETEITEM:
            let notEditObj = preState.tableData.filter((item)=>{
                return item.pk !== data
            })
            let result = [...notEditObj]
            newState=Object.assign({}, preState,{
                tableData:result,
            })
            return newState
        case SAVEITEM:
            let newArr=[...preState.tableData,data]
            newState=Object.assign({},preState,{
                tableData:newArr,
                isAdd:false
            })
            return newState
        case SETINPUT:
            newState=Object.assign({},preState,{
                textValue:data,
            })
            return newState
        case SAVENAME:
            debugger;
            let editObj = preState.tableData.map((item)=>{
                if (item.pk === data.Id){
                    item.fields.csgrp_name = data.value
                }
                return item
            })
            newState=Object.assign({}, preState,{
                tableData:editObj,
            })
            return newState
        default:
        return preState
    }
}