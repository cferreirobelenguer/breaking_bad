
import { configureStore } from '@reduxjs/toolkit'
import ContainerReducer from './reducer'

//Importamos los reducers en la store

const store = configureStore({ reducer: ContainerReducer })
console.log(store.getState())
export default store