import {ADDITEM,EDITITEM,DELETEITEM,SAVEITEM,CANCELITEM} from './action_types';
import dataSource from '../tableData';

let initState={
    isEdit:false,
    isAdd:false,
    editItem:null,
    tableData:dataSource
}

export default function operateItem(preState=initState,action){
    const {type,data} = action
    let newState
    switch (type) {
        case ADDITEM:
            newState=Object.assign({},preState,{
                isAdd:action.data,
            })
            return newState

        case CANCELITEM:
            newState=Object.assign({},preState,{
                isAdd:action.data,
            })
            return newState
        case EDITITEM:
            console.log('action item',action.data.item)
            newState=Object.assign({},preState,{
                isEdit:action.data.isEdit,
                editItem:action.data.item
            })
            return newState
        
        case DELETEITEM:
            newState=preState
            return newState
        case SAVEITEM:
            let newArr=[...preState.tableData,action.data]
            newState=Object.assign({},preState,{
                tableData:newArr,
                isAdd:false
            })
            return newState
       
        default:
        return preState
    }
}