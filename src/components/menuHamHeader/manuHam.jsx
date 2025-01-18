'use client'
import estiloManuHam from './menuham.module.css';
import { IoMdClose } from "react-icons/io";
import hookContext from '@/hookContext';
import { FaPlane } from "react-icons/fa";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { LuBaggageClaim } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { RiLandscapeAiLine } from "react-icons/ri";
import { MdPriceChange } from "react-icons/md";
import Link from 'next/link';
import React , {useEffect , useState} from 'react';




export default function MenuHam() {

    const { openNav, setOpenNav, refMenu } = hookContext()

    const [msgMenuLateral , setMsgMenuLateral] = useState('')


    
    useEffect(()=>{

        const data = new Date()

        const hora = data.getHours()

        if(hora > 5 && hora <= 12){

            
                setMsgMenuLateral('bom dia')
        }

        if(hora > 12 && hora <= 18){

            setMsgMenuLateral('boa tarde')
        }

        if(hora > 18 && hora <=5){
            setMsgMenuLateral('boa noite')
        }
        

    },[])



    return (

        <section ref={refMenu} className={`${estiloManuHam.menuHam} ${openNav ? null : estiloManuHam.manuAnimaOff}`}>

            <div className={estiloManuHam.boxAnimaAviao}>
                <FaPlane className={estiloManuHam.iconAviao} />

            </div>


            <HiOutlineGlobeEuropeAfrica className={estiloManuHam.iconGlobe} />
            <IoMdClose onClick={() => setOpenNav(atuaal => !atuaal)} className={estiloManuHam.iconClose} />

            <nav className={estiloManuHam.navTelaMenor}>



                <ul>
                    <Link onClick={() => setOpenNav(atual => !atual)} href={'#idquem'}>
                        <li>Quem somos <BiSolidPlaneAlt className={estiloManuHam.imgMenu} /> </li>
                    </Link>

                    <Link onClick={() => setOpenNav(atual => !atual)} href={'#idprodutos'}>
                        <li>Produtos <LuBaggageClaim className={estiloManuHam.imgMenu} />  </li>
                    </Link>


                    <Link onClick={() => setOpenNav(atual => !atual)} className={estiloManuHam.link} href={'#idfotos'}>

                        <li >Lugares  <RiLandscapeAiLine className={estiloManuHam.imgMenu} /> </li>
                    </Link>
                    <Link onClick={() => setOpenNav(atual => !atual)} className={estiloManuHam.link} href={'#idlocaliza'}>
                        <li>Localização <FaLocationDot className={estiloManuHam.imgMenu} /></li>
                    </Link>

                    <Link onClick={() => setOpenNav(atual => !atual)} href={'#idcotacao'}>
                        <li>Cotação <MdPriceChange className={estiloManuHam.imgMenu} /> </li>
                    </Link>

                </ul>


            </nav>


            <Link href={`https://wa.me/5571981538307?text=ola , ${msgMenuLateral} , como posso te ajudar ?`} target='_blank'>

                <button className={estiloManuHam.btnNavLateral} type='button'>Fale com o especialista</button>
            </Link>



        </section>
    )
}