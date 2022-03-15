import React, { useState, useEffect } from 'react';
import { ReactComponent as ClockIcon } from './icons/clock.svg';
import { ReactComponent as CalenderIcon } from './icons/calendar.svg';


export const Navbar = ({handleDate})=>{
   
    const [dateState, setDateState] = useState(new Date());

    useEffect(()=>{
        
        handleDate(new Date())
        setInterval(() => { 
            setDateState(new Date())
       handleDate(new Date())
        }, 30000);
    },[])
    // clock update aftefr every 30 seconds
    
    return<>
    <div className="bg-gray-400 w-full h-40">

        <div className="text-center text-8xl text-orange-400 animate-pulse">
            Todo App
        </div>
        <div className="w-fit m-auto">
        <CalenderIcon className='inline-block' />
			<div className='inline-block'>{dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}</div>
                <div>
			<ClockIcon className='inline-block m-3 ml-0' />
			<div className='inline-block'>{dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}</div>
                </div>
        </div>
    </div>
    </>
}