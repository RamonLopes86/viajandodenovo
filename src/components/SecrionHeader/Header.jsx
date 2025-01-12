'use client'

import estiloHeader from './header.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.png'
import hookContext from '@/hookContext';
import MenuHam from '../menuHamHeader/manuHam';
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from 'react';
import ModalVideo from '../modalVideo/modalVideo';
import { LuBaggageClaim } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";



export default function SectionHeader(){


    const {setOpenNav} = hookContext()

    const [animaHeader , setAnimaHeader] = useState(null)

    function clickNavOpen(ev){

        ev.stopPropagation()

        setOpenNav(atual=>!atual)

        return;


    }


    useEffect(()=>{

        const  headerAnimation = () =>{


            if(window.scrollY > 0){

              return  setAnimaHeader(true)
               
            }else{

               return setAnimaHeader(false)
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


        <section style={animaHeader ? {backgroundColor:'#E0FFFF' , transition:'all 500ms linear', height:'120px' , borderBottom:'2px solid var(--verde)'  } : null} className={`${estiloHeader.boxHeader}`}>

                <RxHamburgerMenu style={animaHeader ? null : {color:'white'}} onClick={clickNavOpen} className={estiloHeader.iconHam}/>

    
                <Image className={estiloHeader.iconLogo} alt='logo da vijando de novo' src={logo}/>
    
    
    
                <nav className={estiloHeader.navTelaMaior}>
                    <ul style={{color: animaHeader ? 'var(--azul)' : null}}>
                        <li>Quem somos <LuBaggageClaim className={estiloHeader.imgNavMaior}/> </li>
                        <li>Produtos <BiSolidPlaneAlt className={estiloHeader.imgNavMaior}/> </li>
                        <li>E-mail <IoIosMail className={estiloHeader.imgNavMaior}/></li>
    
                    </ul>
                </nav>
    
    
                <button type="button">Falar com especialista <FaWhatsapp className={estiloHeader.imgWpp}/> </button>



                <MenuHam/>


                <ModalVideo/>
         
        </section>



    )

}