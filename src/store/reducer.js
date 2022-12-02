import {AGREGAR_API,AGREGAR_INPUT} from './types'

//Datos iniciales 
const dataInitial={
    data:"",
    result:[],
}

const ContainerReducer=(state=dataInitial,action)=>{
    switch(action.type){
        case AGREGAR_INPUT:
            console.log(action.evento)
            return {...state,data:action.evento}
        case AGREGAR_API:
            console.log(action.resultado)
            return {...state,result:action.resultado}
        default:
            return state;
    }
}
export default ContainerReducer;