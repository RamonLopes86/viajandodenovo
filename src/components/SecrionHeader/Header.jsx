'use client'

import estiloHeader from './header.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.png'
import hookContext from '@/hookContext';


export default function SectionHeader(){

    const {teste} = hookContext()

    return(


        <section className={estiloHeader.boxHeader}>

            <Image className={estiloHeader.iconLogo} alt='logo da vijando de novo' src={logo}/>

         

            <nav>
                <ul>
                    <li>Quem somos</li>
                    <li>Produtos</li>
                    <li>E-mail</li>
                    
                </ul>
            </nav>


            <button type="button">Falar com especialista</button>

         
        </section>



    )

}