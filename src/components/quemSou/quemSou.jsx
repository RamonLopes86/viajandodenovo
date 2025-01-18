'use client'
import estiloQuem from './quemsou.module.css';
import Image from 'next/image';
import tiago from '../../../public/tiago.jpg'
import tiago2 from '../../../public/image1.jpeg'
import tiago3 from '../../../public/tiago3.jpg'

import { GiClick } from "react-icons/gi";
import hookContext from '@/hookContext';
import React , {useState , useRef , useEffect} from 'react';
import VideoMenor from '../modalVideoMenor/videoMenor';




export default function QuemSou() {


    const { setOpenModalVideo , playerRef , setOpenModalVideoMenor } = hookContext()


    const [animaImg1 , setAnimaImg1] = useState(null)
    const [animaImg2 , setAnimaImg2] = useState(null)
    const [animaImg3 , setAnimaImg3] = useState(null)
    const [animaTx , setAnimaTx] = useState(null)
    const [animaTx2 ,  setAnimaTx2] = useState(null)


    const refImg1 = useRef()
    const refImg2 = useRef()
    const refImg3 = useRef()
    const refTx = useRef()
    const refTx2 = useRef()





    const clikOpenVideo = () => {

        setOpenModalVideo(

            atual=>{

                if(atual){

                    false
                    playerRef.current.pauseVideo()
                    return
                    
                }else{
                   return true
                }

            }


        )

    }


    useEffect(()=>{

        const myObserver = new IntersectionObserver((elemento)=>{


            elemento.forEach((item)=>{


               if(item.isIntersecting){

                    if(item.target === refImg1.current){

                        setAnimaImg1(true)

                    }

                    if(item.target === refImg2.current){

                        setAnimaImg2(true)
                    }

                    if(item.target === refImg3.current){

                        setAnimaImg3(true)
                    }

                    if(item.target === refTx.current){

                        setAnimaTx(true)
                    }

                    if(item.target === refTx2.current){

                        setAnimaTx2(true)
                        console.log('entrou')

                    }

               }else{


             
                if(item.target === refImg1.current){

                    setAnimaImg1(false)

                }

                if(item.target === refImg2.current){

                    setAnimaImg2(false)
                }

                if(item.target === refImg3.current){

                    setAnimaImg3(false)
                }

                if(item.target === refTx.current){

                    setAnimaTx(false)
                }

                
                if(item.target === refTx2.current){

                    setAnimaTx2(false)
                }
                    



               }



            })



        })



        myObserver.observe(refImg1.current)
        myObserver.observe(refImg2.current)
        myObserver.observe(refImg3.current)
        myObserver.observe(refTx.current)
        myObserver.observe(refTx2.current)



        return ()=>{

             myObserver.disconnect()
                

            

        }

    },[])





    return (

        <section    className={estiloQuem.boxMaior}>

                
        
            <section className={estiloQuem.boxPai}>


                <section className={estiloQuem.boxLeft}>
                    <Image ref={refImg1} alt='imagem de tiago lopes do viajando de novo' quality={100} className={`${estiloQuem.image} ${animaImg1 ? estiloQuem.animaPriOn : estiloQuem.animaPriOff}`} src={tiago} />
                    <Image ref={refImg2} alt='imagem de tiago lopes do viajando de novo' quality={100}  className={`${estiloQuem.image} ${animaImg2 ? estiloQuem.animaSegOn : estiloQuem.animaSegOff}`} src={tiago2} />
                    <Image ref={refImg3} alt='imagem de tiago lopes do viajando de novo' quality={100} className={`${estiloQuem.image} ${animaImg3 ? estiloQuem.animaPriOn : estiloQuem.animaPriOff}`} src={tiago3} />
                </section>
                <section className={estiloQuem.boxRight}>

                    <div ref={refTx} className={`${estiloQuem.boxTx} ${animaTx ? estiloQuem.animaTxOn : estiloQuem.animaTxOff}`}>
                        <h1>Tiago Lopes.</h1>
                        <p>Muito prazer, sou CEO da viajando de novo e Já explorei mais de 50 países em cinco continentes, e cada viagem me ensinou que o mundo não é apenas um lugar para conhecer, mas para viver intensamente. Com a Viajando de Novo , minha missão é simples: fazer você viajar mais, gastar menos e transformar sonhos em memórias inesquecíveis. Falei um pouco  <span>sobre isso nesse Podcast  </span></p>

                        <button onClick={clikOpenVideo} type='button'>Clique para assistir <GiClick className={estiloQuem.iconMao} /></button>
                    </div>
                </section>


               

            </section>


            <section ref={refTx2} className={`${estiloQuem.boxTxEscondido} ${animaTx2 ? estiloQuem.animaTx2On : estiloQuem.animaTx2Off}`} >

                <h1>Tiago Lopes.</h1>
                <p>Muito prazer, sou CEO da viajando de novo e Já explorei mais de 50 países em cinco continentes, e cada viagem me ensinou que o mundo não é apenas um lugar para conhecer, mas para viver intensamente. Com a Viajando de Novo , minha missão é simples: fazer você viajar mais, gastar menos e transformar sonhos em memórias inesquecíveis. Falei um pouco  <span>sobre isso nesse Podcast  </span>   </p>

               

            </section>


                <VideoMenor/>

        </section>


    )
}