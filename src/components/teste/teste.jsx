'use client'

import estiloTeste from './teste.module.css';
import Image from 'next/image';
import img1 from '../../../public/chile.jpg'
import img2 from '../../../public/bora.jpg'
import img3 from '../../../public/montanha.jpg'
import { useState } from 'react';

export default function Teste() {
    // Estado para controlar a imagem em destaque (posição)
    const [index, setIndex] = useState(0);
    const imagens = [img1, img2, img3];

    // Função para mover para a próxima imagem
    function nextImage() {
        // setIndex((prevIndex) => (prevIndex + 1) % imagens.length);


        setIndex(prevInex =>{

            if(prevInex >=2){

                return prevInex = 0
            }

            return prevInex + 1
        })

    }

    // Função para mover para a imagem anterior
    function prevImage() {
        setIndex((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
    }

    return (
        <section className={estiloTeste.boxContainer}>
            {/* Mapeando as imagens para exibi-las dinamicamente */}
            {imagens.map((imagem, idx) => (
                <Image
                    key={idx}
                    className={`${estiloTeste.img} ${idx === index ? estiloTeste.imgAtiva : ''}`}
                    alt="imagem"
                    src={imagem}
                />
            ))}



            <div className={estiloTeste.boxButton}>
                <button onClick={prevImage} type="button">Prev</button>
                <button onClick={nextImage} type="button">Next</button>
            </div>


        </section>
    )
}
