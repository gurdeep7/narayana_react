import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completeTodo, getTodo, removeAll, removeCompletedTodo, removeTodo } from "../redux/action";

export const Todo =({data})=>{
    data = data.split(".")
   let date = data[0]
   
   date = date.slice(0,-3)

   const [oneTodo, setOneTodo] = useState({
       task:"",
       dateTime:"",
       completed:false,
   });

   const getTodos= useSelector((state)=>({
todos:state.todoState.todos
   }))

   const dispatch = useDispatch()
   function request(){
       
    if(localStorage.getItem("todo")===null){
        localStorage.setItem("todo",JSON.stringify([]));
      }
      let todo = JSON.parse(localStorage.getItem("todo"));
    
      dispatch(getTodo(todo))
     
   }

   useEffect(()=>{
    
    request()
  },[])
const addOneTodo =()=>{
if(oneTodo.task === ""){
    alert("Enter Task")
    return
}
if(oneTodo.dateTime === ""){
    alert("Enter Date and Time")
    return
} 
oneTodo.id = nanoid(6)
 
dispatch(addTodo(oneTodo))
localStorage.setItem("todo",JSON.stringify(getTodos.todos));
    document.getElementById('task').value='';
    document.getElementById('dateTime').value='';
    setOneTodo({
        task:"",
        dateTime:"",
        completed:false,
    });
}

// entering values
   const change = (e)=>{
    const {name,value} = e.target;
    setOneTodo({
        ...oneTodo,
        [name]:value,
    })
   
    
   }

//mark completed
   const done=(data)=>{
dispatch(completeTodo(data))
   }
// remove perticular todo
   const removetodo =(data)=>{
dispatch(removeTodo(data))
   }
// remove all completed todos
   const removecompletedtodo= ()=>{
       dispatch(removeCompletedTodo())
   }
//remove all todos
   const removeall = ()=>{
       dispatch(removeAll())
   }
    return(
        <div >
<p className="text-4xl text-center">
    Add a Task
</p>
<div className="w-fit m-auto">
    <input id="task" className="w-80 h-10 text-4xl border-2 border-red-300" type="text" onChange={change} placeholder="Add a Task" name="task" />
    <input id="dateTime" className="h-10 align-top border-2 border-red-300" type="datetime-local" onChange={change} name="dateTime" min={date}/>
    <button className="h-10 align-top border-2 hover:bg-gray-200 bg-slate-500 w-20" onClick={addOneTodo}>Add Todo</button>
    <button className="h-10 align-top border-2 hover:bg-gray-200 bg-slate-500 w-48" onClick={removecompletedtodo}>Delete Completed Todos</button>
    <button className="h-10 align-top border-2 hover:bg-gray-200 bg-slate-500 w-36" onClick={removeall}>Clear All</button>
</div>

<div>
    {/* Print Todo List */}
    <table className="m-auto">
        <tr>
            <th className="w-60 border-2">
                Task
            </th>
            <th  className="w-60 border-2">
                Deadline
            </th>
        </tr>
        
    {getTodos?.todos?.map((e)=>{
      
return<tr key={e.id} className={e.completed?"bg-green-500 line-through":""}> <td className="text-center border-2">{e.task}</td><td className="text-center border-2">{e.dateTime}</td>
<td><button className="bg-slate-500 hover:bg-green-400 h-10" onClick={()=>{done(e.id)}}>Completed</button></td>
<td><button className="bg-slate-500 hover:bg-red-400 h-10" onClick={()=>{removetodo(e.id)}}>Remove</button></td></tr>

   })} 
   </table>
</div>
        </div>
    )
}