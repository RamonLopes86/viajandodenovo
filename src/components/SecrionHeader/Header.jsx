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
import { FaLocationDot } from "react-icons/fa6";
import { RiLandscapeAiLine } from "react-icons/ri";
import { MdPriceChange } from "react-icons/md";


import Link from 'next/link';



export default function SectionHeader() {




    const { setOpenNav } = hookContext()

    const [animaHeader, setAnimaHeader] = useState(null)

    const [msg , setMsg] = useState('')


    const styleLink = {

        color: animaHeader ? 'var(--azul)' : null

    }


    function clickNavOpen(ev) {

        ev.stopPropagation()

        setOpenNav(atual => !atual)

        return;


    }


    useEffect(() => {

        const headerAnimation = () => {


            if (window.scrollY > 0) {

                return setAnimaHeader(true)

            } else {

                return setAnimaHeader(false)
            }


        }


        window.addEventListener('scroll', headerAnimation)




        return () => {

            window.removeEventListener('scroll', headerAnimation)
        }

    }, [])


    useEffect(() => {


        const navOff = () => {

            window.innerWidth > 650 ? (setOpenNav(false)) : (null)
        }

        window.addEventListener('resize', navOff)

        return () => {

            window.removeEventListener('resize', navOff)
        }

    }, [])



    useEffect(()=>{

        const data = new Date()

        const hora = data.getHours()

        if(hora > 5 && hora <= 12){

            
             setMsg('bom dia')
        }

        if(hora > 12 && hora <= 18){

            setMsg('boa tarde')
        }

        if(hora > 18 && hora <=5){
            setMsg('boa noite')
        }
      

    },[])



    return (





        <section style={animaHeader ? { backgroundColor: '#E0FFFF', transition: 'all 500ms linear', height: '120px', borderBottom: '2px solid var(--azul)' } : null} className={`${estiloHeader.boxHeader}`}>
            <RxHamburgerMenu style={animaHeader ? null : { color: 'white' }} onClick={clickNavOpen} className={estiloHeader.iconHam} />

            <Link href={'#idbanner'}>
                <Image className={estiloHeader.iconLogo} alt='logo da vijando de novo' src={logo} />
            </Link>

            <nav className={estiloHeader.navTelaMaior}>
                <ul style={{ color: animaHeader ? 'var(--azul)' : null }}>
                    <Link style={styleLink} className={estiloHeader.link} href={'#idquem'}>
                        <li>Quem somos <LuBaggageClaim className={estiloHeader.imgNavMaior} /> </li>
                    </Link>
                    <Link style={styleLink} className={estiloHeader.link} href={'#idprodutos'}>
                        <li>Produtos <BiSolidPlaneAlt className={estiloHeader.imgNavMaior} /> </li>
                    </Link>

                    <Link style={styleLink} className={estiloHeader.link} href={'#idfotos'}>
                        <li >Lugares  <RiLandscapeAiLine className={estiloHeader.imgNavMaior} /> </li>
                    </Link>
                    <Link style={styleLink} className={estiloHeader.link} href={'#idlocaliza'}>
                        <li>Localização <FaLocationDot className={estiloHeader.imgNavMaior} /></li>
                    </Link>
                    <Link style={styleLink} className={estiloHeader.link} href={'#idcotacao'}>
                        <li>Cotação <MdPriceChange className={estiloHeader.imgNavMaior} /> </li>
                    </Link>
                </ul>
            </nav>
            <Link className={estiloHeader.linkBtn} href={`https://wa.me/5571981538307?text=ola , ${msg} , como posso te ajudar ?`} target='_blank'>
                <button className={estiloHeader.btnNavMaior} type="button">Falar com especialista <FaWhatsapp className={estiloHeader.imgWpp} /> </button>
            </Link>

            <MenuHam />

            <ModalVideo />

           

        </section>








    )

}