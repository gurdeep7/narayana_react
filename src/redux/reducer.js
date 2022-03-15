import { ADD_TODO, COMPLETE_TODO, REMOVE_ALL, REMOVE_COMPLETED_TODO, REMOVE_TODO } from "./actionTypes"

const init = {todos:[]}

export const reducer = (state = init, { type, payload })=>{
    console.log(state.todos,payload)

    switch(type){
        case ADD_TODO:{
            return { ...state,todos: [...state.todos , payload] };
        }
        case REMOVE_TODO:{
            let todos= state.todos.filter((e)=>{
                if(e.id == payload){
                    return false
                }else{
                    return true
                }
            })
            return{...state,todos:todos}
        }

        case COMPLETE_TODO:{
            for(let i = 0; i < state.todos.length; i++){
                if(state.todos[i].id == payload){
                    state.todos[i].completed = true
                }
            }
            console.log(state.todos)
            return{...state,todos:state.todos}
        }
        case REMOVE_COMPLETED_TODO:{
            let todos= state.todos.filter((e)=>{
                if(e.completed == true){
                    return false
                }else{
                    return true
                }
            })
            return{...state,todos:todos}
        }
        case REMOVE_ALL:{
            return{...state,todos:[]}
        }
        default: return state;

    }
}