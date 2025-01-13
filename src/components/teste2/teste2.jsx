'use client'
import estilot2 from './teste2.module.css';
import Image from 'next/image';
import img1 from '../../../public/paris.jpg'
import img2 from '../../../public/bora.jpg'
import img3 from '../../../public/tailandia.jpg'
import img4 from '../../../public/china.jpg'
import img5 from '../../../public/montanha.jpg'

import { useState } from 'react';
import { FaArrowCircleRight , FaArrowCircleLeft  } from "react-icons/fa";


export default function Teste2() {

    const [arr, setArr] = useState([

        img1,
        img2,
        img3,
       
      
       
    ])



    const [indexAtivo , setIndexAtivo] = useState(0)



    function slideImage(param) {


        if (param === 'next') {

             setArr(imagens => [...imagens.slice(1), imagens[0]])

             setIndexAtivo(indexAtivo=> {

                if(indexAtivo < arr.length - 1){

                   return indexAtivo + 1
                }

                return 0

             })

             return;
            
           
        }

        if (param === 'prev') {

             setArr(imagens => [imagens[imagens.length - 1], ...imagens.slice(0, - 1)])
             setIndexAtivo(indexAtivo=>{

                if(indexAtivo === 0){

                    return arr.length - 1
                }

                return indexAtivo - 1

             })

        }


    }



    


    return (

        <section className={estilot2.boxContainer}>


            <section className={estilot2.conteinerConteudo}>


                {
                    arr.map((foto, index) => {

                        return (

                            <Image  key={index} alt='imagens de paisagens' className={`${estilot2.img} ${indexAtivo === index ? estilot2.animaOn : estilot2.animaOff}`} src={foto} />




                        )
                    })
                }


                <section className={estilot2.boxThumb}>
                    {
                        arr.map((foto, index) => {
                            return (
                                <div key={index} className={estilot2.thumb}>
                                    <Image style={index === 0 ? {boxShadow:'0px 0px 20px white'} : null} alt='imagens de paisagens' className={estilot2.imgThumb} src={foto} />
                                </div>
                            )
                        })
                    }
                </section>


                <div className={estilot2.boxButton}>

                    <FaArrowCircleLeft onClick={()=>slideImage('prev')} className={estilot2.iconSeta}/>
                    <FaArrowCircleRight onClick={()=>slideImage('next')} className={estilot2.iconSeta}/>
                   
                </div>


            </section>





        </section>

    )
}





