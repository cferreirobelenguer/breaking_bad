import { AGREGAR_API, AGREGAR_INPUT } from "./types";

export const dataModify=dato_evento=>({
    type:"AGREGAR_INPUT",
    evento:dato_evento
})
export const resultModify=dato_resultado=>({
    type:"AGREGAR_API",
    resultado:dato_resultado
})