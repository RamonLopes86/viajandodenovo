'use client'
import hookContext from '@/hookContext';
import estiloVideoMenor from './videoMenor.module.css';
import React , {useState , useEffect } from 'react';





export default function VideoMenor(){

    const {openModalVideoMenor , setOpenModalVideoMenor} = hookContext()

    const [caminho , setCaminho] = useState("https://www.youtube.com/embed/j1vAPFAPGjE?autoplay=1&playsI")


    useEffect(()=>{


        const recolherVideoMenor = () =>{

            if(window.innerWidth > 1205){

                setOpenModalVideoMenor(false)
              
           
               
            
            }else{

                  setOpenModalVideoMenor(true)
            }

        }



        window.addEventListener('resize' , recolherVideoMenor)


        return () => {

            window.removeEventListener('resize' , recolherVideoMenor)

        }

    }, [])


    useEffect (()=>{

        const pauseVideo = () =>{

            if(window.innerWidth > 1205){

                return setCaminho(null)
            }else{

                setCaminho(caminho)
            }

        }



        window.addEventListener('resize' , pauseVideo)



        return ()=>{

            window.removeEventListener('resize' , pauseVideo)
        }


    },[])


    return(


        <section className={estiloVideoMenor.boxPai}>
            
            <section className={`${estiloVideoMenor.boxVideoMenor} ${openModalVideoMenor ? estiloVideoMenor.animaOn : estiloVideoMenor.animaOff }`}>
                    <iframe className={estiloVideoMenor.iframeMenor} src={caminho}>
                    </iframe>
            </section>

        </section>
    )
}
