"use client";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "./store";
import { useEffect, useState } from "react";
import { ITodo, removeToDoState, setToDoState } from "./slice/todoSlice";
import {v4 as uuidv4} from 'uuid';
export default function Home() {

  const[query, setQuery] = useState('');
  const dispatch = useAppDispatch();
  const toDoState:any = useAppSelector((state) => state.todolist);



  function handleAdd()
  {
    const todo:ITodo = {
      id:uuidv4(),
      name:query,
      isDeleated: false
    }
    dispatch(setToDoState(todo));

  }

  
  function handleRemove(item:ITodo)
  {
    dispatch(removeToDoState(item));

  }


  return (
   <div className="w-100 flex flex-col  justify-center h-screen">

    <div className=" flex  flex-col shadow w-96 h-96 bg-neutral-200  ml-auto mr-auto ">
      <div className=" flex mt-2  ml-auto mr-auto ">
      <input type="text" className="mr-2 h-10" onChange={(e)=> setQuery(e.target.value)}/>

<button onClick={handleAdd} className=" bg-zinc-950 text-white p-2 h-10 ">Add </button>

      </div>
      <div>
{
  toDoState?.todolist?.map((item:ITodo)=>(
<div className="flex gap-4 justify-center mt-2  ">
<p>{item.name}</p>
    <button style={{background:'red', color:'white'}} onClick={()=>handleRemove(item)}>Delete</button>
</div>
    
  ))
}
  
</div>
  

   


    </div>


   </div>
  );
}
