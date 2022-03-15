import { useState } from "react"
import { Navbar } from "./Navbar"
import { Todo } from "./Todo"

export const Home = ()=>{

const [date,setdate] = useState("")

const handleDate = (data)=>{
    console.log(data.toISOString())
setdate(data.toISOString())
}
    return(
        <>
        <Navbar handleDate={handleDate} />
        <Todo data={date}/>
        </>
    )
}