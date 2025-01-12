'use client'
import estiloProd from './produtos.module.css';
import React, { useState, useEffect } from 'react';
import dados from '@/dados/dados';
import Image from 'next/image';





export default function Produtos() {


    return (

        <section className={estiloProd.boxProdutos}>

            <h1>Produtos</h1>


            <section className={estiloProd.produtos}>

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