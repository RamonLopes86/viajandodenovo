'use client'
import estiloFoto from './fotos.module.css';
import Image from 'next/image';
import chile from '../../../public/chile.jpg'
import uruguai from '../../../public/uruguai.jpg'
import paris from '../../../public/paris.jpg'
import tailandia from '../../../public/tailandia.jpg'
import montanha from '../../../public/montanha.jpg'
import china from '../../../public/china.jpg'
import bora from '../../../public/4.jpg'
import React , {useState , useEffect , useRef} from 'react';



export default function Fotos(){

const arrayImage = [chile , uruguai , paris , tailandia , montanha , china , bora]

// const [anima , setAnima] = useState(Array.from({length:arrayImage.length} , (_,index)=> index = estiloFoto.animaOn))

const [anima , setAnima] = useState(Array.from(arrayImage.map(()=> estiloFoto.animaOff)))

const refImg = useRef([])




useEffect(()=>{


    const myObserver = new IntersectionObserver((elemento)=>{


        elemento.forEach((el)=>{

        
               const index = refImg.current.indexOf(el.target)

                if(index !== -1){

                    setAnima(

                        animaAtual=>{

                            const animaArray = [...animaAtual]

                            animaArray[index]  =  el.isIntersecting ? estiloFoto.animaOn : estiloFoto.animaOff

                            return animaArray
                        }
                    )

                }

            


          


        })

    })


    refImg.current.forEach((ref)=> myObserver.observe(ref))



  
    return () =>{

            return  myObserver.disconnect()
    }

},[])
    


    return(

        <section id='idfotos' className={estiloFoto.boxPai}>

            <h1>Lugares</h1>

            <h2>Uma bela experiência com conforto e segurança para você e sua família.</h2>

            <section className={estiloFoto.boxFilho}>

                {

                    arrayImage.map((image , index)=>{

                        return(

                            <Image  key={index} ref={(el)=> refImg.current[index] = el} className={`${estiloFoto.image} ${anima[index]}`} alt='imagens de paisagens' quality={100} src={image}/>

                        )

                    })
                }


            </section>



     
                <p>Capture momentos únicos que só  a <span>viajando de novo </span> com seus benefícios exclúsivos e estratégias unicas pode oferecer.</p>
                





        </section>


    )

}