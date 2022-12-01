import { useState } from "react";

export const useData=()=>{
    //Hook que coge el dato del input y se almacena en state data
    const [data,setData]=useState("")
    const handlerSubmit=(e)=>{
        e.preventDefault()
        
    }
    const handlerChange=(e)=>{
        setData(e.target.value)
    }
    return{
        data,
        handlerChange,
        handlerSubmit
    }
}