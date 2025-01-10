'use client'
import estiloProd from './produtos.module.css';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import imageSafari from '../../../public/image1.jpeg'
import imagePaisagem from '../../../public/image2.jpeg'



export default function Produtos() {

    const produtos = ["Passagens aéreas", "Pacotes", "Passagens em milhas", "Hóteis", "Cruzeiro", "Alugeis de carro", "Seguro viagem", "passeios e transfers", "chip internacional"]

    return (

        <section className={estiloProd.boxProdutos}>

            <h1>Produtos</h1>

            <section className={estiloProd.boxFilho}>

                <section className={estiloProd.boxBlocos}>
                    <h1>Produtos que você encontrará na Viajando de Novo</h1>
                    <div className={estiloProd.boxGira}>
                        {
                            produtos.map((itens , index) => {
                                return (
                                    <div className={estiloProd.blocos} key={index}>
                                        <p>{itens}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className={estiloProd.boxExp}>
                    <h1>Passagens aéreas: Uma bela experiência com conforto e segurança para você e sua família.</h1>
                    <p>Capture momentos únicos que só a natureza pode oferecer. Vem viver um safári inesquecível na África e descobrir a beleza selvagem bem de perto! 🌍📸 #ExploreMais #SafáriAfricano #AventuraDosSonhos</p>


                    <div className={estiloProd.bxImg}>
                        <Image alt='imagem de uma paisagem' title='imagem de paisagem' className={estiloProd.imgSafari} quality={100} src={imageSafari} />

                        <Image className={estiloProd.imgPaisagemEscondido} alt='imagem de paisagem' title='imagem de paisagem' src={imagePaisagem}/>
                    </div>

                </section>
               

            </section>

            <section className={estiloProd.boxImagem}>
                    <Image className={estiloProd.imgPaisagem} alt='imagem de uma paisagem' title='imagem de paisagem' quality={100} src={imagePaisagem} />
                </section>

        </section>

    )
}