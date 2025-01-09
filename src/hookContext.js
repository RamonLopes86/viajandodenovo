import { useContext } from "react";
import { context } from "./context/context";


export default function hookContext(){


    const contexto = useContext(context)

    if(contexto === !undefined){

      return  console.log(" componente fora de contexto")
    }


    return contexto

}

