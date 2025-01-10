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

    const [animaHeader , setAnimaHeader] = useState(false)

    function clickNavOpen(ev){

        ev.stopPropagation()

        setOpenNav(atual=>!atual)

        return;


    }


    useEffect(()=>{

        const  headerAnimation = () =>{


            if(window.scrollY > 0){

                setAnimaHeader(true)
               
            }else{

                setAnimaHeader(false)
            }


        }


        window.addEventListener('scroll' , headerAnimation)



        return()=>{

            window.removeEventListener('scroll' , headerAnimation)
        }


    },[])


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


        <section style={animaHeader ? {backgroundColor:'white' , transition:'all 500ms linear', height:'120px' , borderBottom:'2px solid var(--azul)' } : null} className={`${estiloHeader.boxHeader}`}>

                <RxHamburgerMenu style={animaHeader ? null : {color:'white'}} onClick={clickNavOpen} className={estiloHeader.iconHam}/>

    
                <Image className={estiloHeader.iconLogo} alt='logo da vijando de novo' src={logo}/>
    
    
    
                <nav className={estiloHeader.navTelaMaior}>
                    <ul style={{color: animaHeader ? 'gray' : null}}>
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