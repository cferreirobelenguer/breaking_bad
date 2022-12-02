import React from 'react'

const CardInfo=({result})=>{
    
    return(
        <div className="card_information">
            <div className="card_img">
                <img src={result.img} alt="" className="imagen"></img> 
            </div>
            <div className="card_name">
                <h3>{result.name}</h3>
            </div>
            <div className="card_ocupation">
                <h6>{result.ocupation}</h6>
            </div>
            <div className={result.status==="Presumed dead"?"card_statusDead":"card_status"}>
                <h6>{result.status}</h6>
            </div>
        </div>
    )
}
export default CardInfo;