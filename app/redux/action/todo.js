import {ADD,TOGGLE} from '../type'
export const add = (name) =>({
    type:ADD,
    name
})
export const toggle = (toggle) =>({
    type:TOGGLE,
    toggle
})