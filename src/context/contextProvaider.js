'use client'
import { context } from "./context"
import React , {useState  , useEffect, useRef} from "react"


export default function ContextProvaider({children}){

    const [openNav , setOpenNav] = useState(false)

    const refMenu = useRef()

    function clickHiddenMenu({target}){


        if(refMenu.current && !refMenu.current.contains(target)){

            setOpenNav(false)
        }
    }




    



    const value = {

        openNav,
        setOpenNav,
        refMenu,
        clickHiddenMenu
     

    }


    return(


        <context.Provider value={value}>

            {children}

        </context.Provider>

    )


}