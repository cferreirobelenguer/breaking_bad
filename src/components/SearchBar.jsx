import React from 'react'
import { useData } from '../hooks/useData'
import CardImage from './CardImage'

const SearchBar=()=>{
    const{data,handlerChange,handlerSubmit}=useData()
    return(
        <div className="card_container">
            <div className="card_title">Breaking Bad Wiki</div>
            <div className="card_form">
                <form onSubmit={handlerSubmit}>
                    <div>
                        <input
                        onChange={handlerChange}
                        className="inputStyle"
                        placeholder='Introduce nombre'
                        required
                        />
                    </div>
                </form>
            </div>
            <div className="card_info">
                <CardImage info={data}></CardImage>
            </div>
        </div>
    )
}
export default SearchBar
