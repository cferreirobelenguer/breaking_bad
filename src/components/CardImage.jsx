import React from 'react'
import { useFetch } from '../hooks/useFetch';
import CardInfo from './CardInfo';

const CardImage=({info})=>{
    //Se llama al custom hook useFetch
    const {result}=useFetch(info)
    //Si no encuentra resultados muestra no encontrado y si encuentra muestra el componente cardInfo y pasa por props result
    return(
        <div className="info_container">
            <div className="info_card">
                {result===undefined 
                ? 
                    <h1>No encontrado</h1>
                : 
                    <CardInfo result={result}></CardInfo>}
                
            </div>
        </div>
    )
}
export default CardImage;