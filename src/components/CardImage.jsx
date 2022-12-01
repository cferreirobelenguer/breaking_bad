import React from 'react'
import { useFetch } from '../hooks/useFetch';

const CardImage=({info})=>{
    //Se llama al custom hook useFetch
    const {result}=useFetch(info)
    return(
        <div className="info_container">
            <div className="info_card">
                <h1>contenido</h1>
            </div>
        </div>
    )
}
export default CardImage;