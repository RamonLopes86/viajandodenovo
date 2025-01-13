'use client'
import estilot2 from './teste2.module.css';
import Image from 'next/image';
import img1 from '../../../public/paris.jpg'
import img2 from '../../../public/bora.jpg'
import img3 from '../../../public/tailandia.jpg'
import { useState } from 'react';


export default function Teste2() {

    const [arr, setArr] = useState([

        img1,
        img2,
        img3
    ])



    const [anima, setAnima] = useState()



    function next(param) {


        if (param === 'next') {

            return setArr(imagens => [...imagens.slice(1), imagens[0]])
        }

        if (param === 'prev') {

            return setArr(imagens => [imagens[imagens.length - 1], ...imagens.slice(0, -1)])

        }


    }




    return (

        <section className={estilot2.boxContainer}>


            {

                arr.map((foto, index) => {


                    return (

                        <div className={estilot2.boxImg} key={index}>

                            <Image alt='imagens de paisagens' className={estilot2.img} src={foto} />



                            <div className={estilot2.boxButton}>

                                <button onClick={() => next('next')} type="button">next</button>
                                <button onClick={() => next('prev')} type="button">prev</button>

                            </div>


                            <section className={estilot2.boxThumb}>


                                {

                                    arr.map((foto, index) => {

                                        return (


                                            <div key={index} className={estilot2.thumb}>

                                                <Image alt='imagens de paisagens' className={estilot2.imgThumb} src={foto} />




                                            </div>
                                        )

                                    })
                                }


                            </section>

                        </div>

                    )
                })

            }











        </section>

    )
}