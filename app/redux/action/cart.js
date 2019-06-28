import {ADD_CART,REMOVE_FROM_CART} from '../type/'
// import {dataProduct} from '../../constant/data'
export const add_cart = (data) =>({
    type:ADD_CART,
    payload:data
})
export const removeItem = (data) =>({
        type: REMOVE_FROM_CART,
        payload: data
    })