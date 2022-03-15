

import { ADD_TODO, COMPLETE_TODO, GET_TODO, REMOVE_ALL, REMOVE_COMPLETED_TODO, REMOVE_TODO } from "./actionTypes"


export const addTodo =(data)=>({
type: ADD_TODO,
payload:data,
})

export const removeTodo =(id)=>({
type: REMOVE_TODO,
payload:id
})

export const completeTodo = (id)=>({
type: COMPLETE_TODO,
payload:id
})

export const getTodo = ()=>({
type:GET_TODO
})

export const removeCompletedTodo = ()=>({
    type:REMOVE_COMPLETED_TODO,
})

export const removeAll = ()=>({
    type:REMOVE_ALL
})