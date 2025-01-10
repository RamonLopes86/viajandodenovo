'use client'
import { context } from "./context"
import React , {useState  , useEffect} from "react"


export default function ContextProvaider({children}){

    const [openNav , setOpenNav] = useState(false)


    const value = {

        openNav,
        setOpenNav
     

    }


    return(


        <context.Provider value={value}>

            {children}

        </context.Provider>

    )


}