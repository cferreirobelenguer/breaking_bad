
//Función que hace la petición a la API y muestra el primer array resultado de la búsqueda
export const getResult=async(info)=>{
    
        const res=await fetch("https://breakingbadapi.com/api/characters?name="+info)
        const data=await res.json()
        return data[0]
}