'use client'
import { context } from "./context"
import React , {useState  , useEffect, useRef} from "react"



export default function ContextProvaider({children}){

    const [openNav , setOpenNav] = useState(false)

    const [openModalVideo , setOpenModalVideo] =  useState(false)

    const [openModalVideoMenor , setOpenModalVideoMenor] = useState(false)

    const [openModalWpp , setOpenModalWpp] = useState(false)

    const [msgWpp , setMsgWpp] = useState(false)
    


 
    const refMenu = useRef()


     const playerRef = useRef(null);

    
    function clickHiddenMenu({target}){


        if(refMenu.current && !refMenu.current.contains(target)){

            setOpenNav(false)
        }


    }
        

    function clickModalWpp(param){

        if(param === 'abrir'){

            setOpenModalWpp(true)

             setTimeout(()=>{

                setMsgWpp(true)

            },1000)


            


            return;

        }

        if(param === 'fechar'){

             setOpenModalWpp(false)
             setMsgWpp(false)
             return;
            
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
        setOpenModalVideoMenor,
        openModalWpp,
        setOpenModalWpp,
        clickModalWpp,
        msgWpp,
        setMsgWpp
        
       
    }
       
     



    return(


        <context.Provider value={value}>

            {children}

        </context.Provider>

    )


}