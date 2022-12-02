
import {useDispatch,useSelector} from 'react-redux'
import { dataModify } from "../store/action";

export const useData=()=>{
    const dispatcher=useDispatch()
    //Cogemos el state data y lo llamamos con dispatcher
    const data=useSelector(state=>state.data)
    const setData=()=>dispatcher(dataModify(e))
    //Hook que coge el dato del input y se almacena en state data
    const handlerSubmit=(e)=>{
        e.preventDefault()
        
    }
    const handlerChange=(e)=>{
        const setData=()=>dispatcher(dataModify(e.target.value))
        setData(e.target.value)
        
    }
    return{
        data,
        handlerChange,
        handlerSubmit
    }
}