'use client'

import estiloHeader from './header.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.png'
import hookContext from '@/hookContext';
import MenuHam from '../menuHamHeader/manuHam';
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from 'react';


export default function SectionHeader(){


    const {setOpenNav} = hookContext()


    useEffect(()=>{


        const navOff = ()=>{

            window.innerWidth > 650 ?(setOpenNav(false)) : ( null)
        }

        window.addEventListener('resize' , navOff)

        return()=>{

            window.removeEventListener('resize' , navOff)
        }

    },[])



   

    return(


        <section className={estiloHeader.boxHeader}>

                <RxHamburgerMenu onClick={()=> setOpenNav(atual=>!atual)} className={estiloHeader.iconHam}/>

    
                <Image className={estiloHeader.iconLogo} alt='logo da vijando de novo' src={logo}/>
    
    
    
                <nav className={estiloHeader.navTelaMaior}>
                    <ul>
                        <li>Quem somos</li>
                        <li>Produtos</li>
                        <li>E-mail</li>
    
                    </ul>
                </nav>
    
    
                <button type="button">Falar com especialista</button>



                <MenuHam/>
         
        </section>



    )

}