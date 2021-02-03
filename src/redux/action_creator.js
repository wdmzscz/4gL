import {EDITITEM,DELETEITEM,SAVEITEM,ADDITEM,CANCELITEM} from './action_types';

export const editItemAction = value=>({type:EDITITEM,data:value});

export const deleteItemAction = value=>({type:DELETEITEM,data:value});

export const saveItemAction = value=>({type:SAVEITEM,data:value});

export const addItemAction = value=>({type:ADDITEM,data:value});

export const cancelItemAction = value=>({type:CANCELITEM,data:value});