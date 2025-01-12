'use client'
import estiloBanner from './banner.module.css';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import plane from '../../../public/plane2.png'
import logo from '../../../public/logo.png'





export default function Banner() {




    return (

        <section className={estiloBanner.boxBanner}>


            <div className={estiloBanner.boxOverFlow}>

                <div className={estiloBanner.boxAnima}>
                  <Image alt='imagem da logo' className={estiloBanner.iconLogo} src={logo}/> <div className={estiloBanner.linha}></div>  <Image alt='imagem aviao' quality={100} className={estiloBanner.imgPlane} src={plane}/>
                </div>

            </div>

           

                <h1>Viajar nunca foi tão fácil, seguro e divertido </h1>
           


        </section>



    )
}











