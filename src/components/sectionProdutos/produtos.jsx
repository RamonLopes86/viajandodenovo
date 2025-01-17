'use client'
import estiloProd from './produtos.module.css';
import React, { useState, useEffect , useRef } from 'react';
import dados from '@/dados/dados';
import Image from 'next/image';





export default function Produtos() {

    const [animaProd , setAnimaProd] = useState(null)

    const refProd = useRef()



    useEffect(()=>{


        const myObserver = new IntersectionObserver((elemento)=>{


            elemento.forEach((el)=>{

                el.isIntersecting ? setAnimaProd(true) : setAnimaProd(false)

            })

        })



        myObserver.observe(refProd.current)


        return ()=>{

            myObserver.disconnect()
        }

    },[])


    return (

        <section  className={estiloProd.boxProdutos}>

            <h1 >Produtos  <span id='idprodutos'>...</span></h1>


            <section ref={refProd} className={`${estiloProd.produtos} ${animaProd ? estiloProd.animaOn : estiloProd.animaOff}`}>

                {

                    dados.map((dado) => {

                        return (

                            <div key={dado.id} className={estiloProd.card}>

                                <p>{dado.nome}</p>

                                <Image alt='icones' className={estiloProd.img} quality={100} width={50} height={50} src={dado.img} />



                            </div>

                        )


                    })
                }


            </section>



        </section>


    )

}