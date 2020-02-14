import React from 'react'
import { createStore, combineReducers } from 'redux';
import  ProductReducer  from '../ProductReducer';


export const init = () => {
   
    const reducer = combineReducers({
        ProductReducer
    })
    
    const store = createStore(reducer)
    return store
}