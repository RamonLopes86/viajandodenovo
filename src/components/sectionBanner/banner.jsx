'use client'
import estiloBanner from './banner.module.css';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import plane from '../../../public/plane2.png'
import logo from '../../../public/logo.png'
import hookContext from '@/hookContext';


export default function Banner() {


    const boxRef = useRef()

    const [animaTit , setAnimaTit] = useState(false)

    const {clickOpenMOdalWpp} = hookContext()



    useEffect(()=>{

        const myObserver = new IntersectionObserver((el)=>{

            el.forEach((item)=>{

                if(item.isIntersecting){

                    setAnimaTit(true)

                }else{

                    setAnimaTit(false)
                }

            })


        })

        


        myObserver.observe(boxRef.current)


        return () => {

            if(boxRef){

                myObserver.unobserve(boxRef.current)
            }

        }

    },[])




    return (

        <section id='idbanner' className={estiloBanner.boxBanner}>

                <p id='idquem' style={{position:'absolute' , right:'0', bottom:'100px', visibility:'hidden'}}></p>


            <div   className={`${estiloBanner.boxOverFlow} `}>

                <div className={`${estiloBanner.boxAnima} `}>
                  <Image alt='imagem da logo' className={estiloBanner.iconLogo} src={logo}/> <div className={estiloBanner.linha}></div>  <Image alt='imagem aviao' quality={100} className={estiloBanner.imgPlane} src={plane}/>
                </div>

            </div>

           

                <h1 className={animaTit ? estiloBanner.animaOn : estiloBanner.animaOff}  ref={boxRef}>Viajar nunca foi tão fácil, seguro e divertido </h1>
           


        </section>



    )
}











