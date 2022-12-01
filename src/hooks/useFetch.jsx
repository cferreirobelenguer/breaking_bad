import {useState,useEffect} from 'react'
import {getResult} from '../helpers/useFetchData'

//Custom hook useFetch que coge el resultado de la petición de getResult y lo almacena en un state para
//pasarlo al componente CardImage

export const useFetch=(info)=>{

    const [result, setResult]=useState([])

    const getData=async()=>{
        const resultado=await getResult(info)
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