import {useEffect} from 'react'
import {getResult} from '../helpers/useFetchData'
import {useDispatch,useSelector} from 'react-redux'
import { resultModify } from '../store/action'

//Custom hook useFetch que coge el resultado de la petición de getResult y lo almacena en un state para
//pasarlo al componente CardImage

export const useFetch=(info)=>{

    const dispatcher=useDispatch();
    //Cogemos el state result y lo llamamos con dispatcher
    const result=useSelector(state=>state.result)

    const getData=async()=>{
        const resultado=await getResult(info)
        const setResult=()=>dispatcher(resultModify(resultado))
        console.log(resultado)
        setResult(resultado)
    }
    useEffect(()=>{
        getData()
    },[info])
    return{
        result
    }
}