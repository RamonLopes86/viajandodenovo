'use client'
import hookContext from '@/hookContext';
import estiloVideoMenor from './videoMenor.module.css';
import { useEffect } from 'react';




export default function VideoMenor(){

    const {openModalVideoMenor , setOpenModalVideoMenor} = hookContext()


    useEffect(()=>{


        const recolherVideoMenor = () =>{

            if(window.innerWidth > 1205){


                setOpenModalVideoMenor(false)
            }

        }



        window.addEventListener('resize' , recolherVideoMenor)


        return () => {

            window.removeEventListener('resize' , recolherVideoMenor)

        }

    },[])


    return(


        <section className={`${estiloVideoMenor.boxVideoMenor} ${openModalVideoMenor ? estiloVideoMenor.animaOn : estiloVideoMenor.animaOff }`}>


                <iframe className={estiloVideoMenor.iframeMenor} src="https://www.youtube.com/embed/j1vAPFAPGjE?autoplay=1&playsI">
                </iframe>


        </section>
    )
}
