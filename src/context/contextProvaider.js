'use client'
import { context } from "./context"
import React , {useState  , useEffect} from "react"


export default function ContextProvaider({children}){

  


    const value = {

     

    }


    return(


        <context.Provider value={value}>

            {children}

        </context.Provider>

    )


}