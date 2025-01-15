'use client'
import { context } from "./context"
import React , {useState  , useEffect, useRef} from "react"



export default function ContextProvaider({children}){

    const [openNav , setOpenNav] = useState(false)

    const [openModalVideo , setOpenModalVideo] =  useState(false)

    const [openModalVideoMenor , setOpenModalVideoMenor] = useState(false)

 
    const refMenu = useRef()


     const playerRef = useRef(null);  // Referência para o player do YouTube

    
    function clickHiddenMenu({target}){


        if(refMenu.current && !refMenu.current.contains(target)){

            setOpenNav(false)
        }


    }
        

      


        


    const value = {

        openNav,
        setOpenNav,
        refMenu,
        clickHiddenMenu,
        openModalVideo,
        setOpenModalVideo,
        playerRef,
        openModalVideoMenor,
        setOpenModalVideoMenor
       
    }
       
     



    return(


        <context.Provider value={value}>

            {children}

        </context.Provider>

    )


}